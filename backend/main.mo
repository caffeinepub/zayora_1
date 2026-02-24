import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Migration "migration";

(with migration = Migration.run)
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
};
