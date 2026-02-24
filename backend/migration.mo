import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
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

  type OldActor = {
    products : Map.Map<Nat, Product>;
    orders : Map.Map<Nat, Order>;
    nextOrderId : Nat;
    product1 : Product;
    product2 : Product;
    product3 : Product;
    ultraPodAir31 : Product;
  };

  type NewActor = {
    products : Map.Map<Nat, Product>;
    orders : Map.Map<Nat, Order>;
    nextOrderId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    let newProducts = Map.empty<Nat, Product>();

    let product1 : Product = {
      id = 1;
      name = "Classic Denim Jacket";
      description = "Timeless style meets comfort with our classic denim jacket. Made from premium 100% cotton denim, it's perfect for layering in any season.";
      imagePath = "/assets/generated/classic-denim-jacket.png";
      mrp = 2499;
      features = [
        "100% cotton denim",
        "Available in S, M, L, XL, XXL",
        "Button closure",
        "Two chest pockets",
        "Machine washable",
      ];
      available = true;
    };

    let product2 : Product = {
      id = 2;
      name = "Summer Breeze Maxi Dress";
      description = "Stay cool and stylish with our lightweight summer maxi dress. Features a flattering A-line silhouette and vibrant floral patterns.";
      imagePath = "/assets/generated/summer-breeze-maxi-dress.png";
      mrp = 1799;
      features = [
        "Polyester blend material",
        "Available in S, M, L, XL",
        "Floral patterns",
        "Sleeveless design",
        "Machine washable",
      ];
      available = true;
    };

    let product3 : Product = {
      id = 3;
      name = "Men's Slim Fit Chinos";
      description = "Upgrade your wardrobe with our slim fit chinos. Designed for comfort and style, available in classic colors for any occasion.";
      imagePath = "/assets/generated/mens-slim-fit-chinos.png";
      mrp = 1499;
      features = [
        "98% cotton, 2% elastane",
        "Available in 28-40 waist sizes",
        "Multiple color options",
        "Zipper fly with button closure",
        "Machine washable",
      ];
      available = true;
    };

    newProducts.add(1, product1);
    newProducts.add(2, product2);
    newProducts.add(3, product3);

    {
      products = newProducts;
      orders = old.orders;
      nextOrderId = old.nextOrderId;
    };
  };
};
