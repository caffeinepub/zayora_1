import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Order {
    customerName: string;
    status: OrderStatus;
    productId: bigint;
    orderId: bigint;
    totalAmount: bigint;
    address: string;
    phone: string;
}
export interface Product {
    id: bigint;
    mrp: bigint;
    features: Array<string>;
    imagePath: string;
    name: string;
    description: string;
    available: boolean;
}
export enum OrderStatus {
    shipped = "shipped",
    cancelled = "cancelled",
    pending = "pending",
    delivered = "delivered"
}
export interface backendInterface {
    getAllProducts(): Promise<Array<Product>>;
    getOrder(orderId: bigint): Promise<Order | null>;
    getOrderStatus(orderId: bigint): Promise<OrderStatus | null>;
    getProduct(productId: bigint): Promise<Product | null>;
    placeOrder(productId: bigint, name: string, address: string, phone: string): Promise<bigint | null>;
    updateOrderStatus(orderId: bigint, status: OrderStatus): Promise<boolean>;
}
