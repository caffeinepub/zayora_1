import Map "mo:core/Map";
import Nat "mo:core/Nat";

actor {
  type Product = {
    id : Nat;
    name : Text;
    description : Text;
    imagePath : Text;
    mrp : Nat;
    features : [Text];
    available : Bool;
  };

  type OrderStatus = {
    #pending;
    #shipped;
    #delivered;
    #cancelled;
  };

  type Order = {
    orderId : Nat;
    productId : Nat;
    customerName : Text;
    address : Text;
    phone : Text;
    totalAmount : Nat;
    status : OrderStatus;
  };

  let products = Map.empty<Nat, Product>();
  let orders = Map.empty<Nat, Order>();

  var nextOrderId = 1;

  public query ({ caller }) func getProduct(productId : Nat) : async ?Product {
    products.get(productId);
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    let list = products.toArray();
    switch (list.size()) {
      case (0) { [] };
      case (_) {
        list.map(func(entry) { entry.1 });
      };
    };
  };

  public shared ({ caller }) func placeOrder(productId : Nat, name : Text, address : Text, phone : Text) : async ?Nat {
    switch (products.get(productId)) {
      case (null) { null };
      case (?product) {
        if (not product.available) { return null };

        let totalAmount = product.mrp + 50;
        let orderId = nextOrderId;
        nextOrderId += 1;

        let order : Order = {
          orderId;
          productId;
          customerName = name;
          address;
          phone;
          totalAmount;
          status = #pending;
        };

        orders.add(orderId, order);
        ?orderId;
      };
    };
  };

  public query ({ caller }) func getOrder(orderId : Nat) : async ?Order {
    orders.get(orderId);
  };

  public func updateOrderStatus(orderId : Nat, status : OrderStatus) : async Bool {
    switch (orders.get(orderId)) {
      case (null) { false };
      case (?order) {
        let updatedOrder = { order with status };
        orders.add(orderId, updatedOrder);
        true;
      };
    };
  };

  public query ({ caller }) func getOrderStatus(orderId : Nat) : async ?OrderStatus {
    switch (orders.get(orderId)) {
      case (null) { null };
      case (?order) { ?order.status };
    };
  };

  let product1 : Product = {
    id = 1;
    name = "True Wireless Earbuds Alpha";
    description = "High-fidelity sound with up to 24 hours total playback, Bluetooth 5.0, and IPX5 water resistance. Comes with charging case.";
    imagePath = "/assets/products/alpha_earbuds.png";
    mrp = 1299;
    features = [
      "24 hours battery life",
      "Bluetooth 5.0",
      "IPX5 water resistance",
      "Compact charging case",
    ];
    available = false;
  };

  let product2 : Product = {
    id = 2;
    name = "Smart Watch V7";
    description = "Fitness tracking, heart rate monitoring, and message notifications. Waterproof design with 7-day battery life.";
    imagePath = "/assets/products/v7_smartwatch.png";
    mrp = 2999;
    features = [
      "Heart rate monitor",
      "7 days battery",
      "Waterproof design",
      "Fitness tracking",
    ];
    available = false;
  };

  let product3 : Product = {
    id = 3;
    name = "True Wireless Earbuds BlueX1";
    description = "Elevate your audio experience with BlueX1 wireless earbuds. Featuring 8 hours of battery life on a single charge and compact charging case for all-day play.";
    imagePath = "/assets/products/bluex1_earbuds.png";
    mrp = 499;
    features = [
      "8 hours battery life",
      "Charging case included",
      "True wireless stereo",
      "Easy Bluetooth pairing",
    ];
    available = true;
  };

  products.add(1, product1);
  products.add(2, product2);
  products.add(3, product3);
};
