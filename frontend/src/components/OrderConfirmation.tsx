import { useOrder, useProduct } from '../hooks/useQueries';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { CheckCircle2, Home, Loader2, Package, MapPin, Phone, User } from 'lucide-react';

interface OrderConfirmationProps {
  orderId: bigint;
  onBackToHome: () => void;
}

const DELIVERY_CHARGE = 50;

export default function OrderConfirmation({ orderId, onBackToHome }: OrderConfirmationProps) {
  const { data: order, isLoading, error } = useOrder(orderId);
  const { data: product } = useProduct(order?.productId || null);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-background to-orange-50/30 dark:from-orange-950/10 dark:via-background dark:to-orange-950/10">
        <div className="text-center">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-orange-500" />
          <p className="mt-4 text-muted-foreground">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-background to-orange-50/30 dark:from-orange-950/10 dark:via-background dark:to-orange-950/10">
        <Card className="mx-4 max-w-md border-2 border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Order Not Found</CardTitle>
            <CardDescription>Unable to load order details</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button onClick={onBackToHome} className="w-full">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const totalAmount = Number(order.totalAmount);
  const productMrp = totalAmount - DELIVERY_CHARGE;

  const handleWhatsAppNotification = () => {
    const message = `🛍️ *New Order Received*

📦 *Product:* ${product?.name || 'Product'}
💰 *MRP:* ₹${productMrp}
🚚 *Delivery Charge:* ₹${DELIVERY_CHARGE}
💵 *Total Amount:* ₹${totalAmount}

👤 *Customer Details:*
Name: ${order.customerName}
📱 Phone: ${order.phone}
📍 Address: ${order.address}

🆔 Order ID: #${order.orderId.toString()}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919919031626?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-background to-orange-50/30 py-12 dark:from-orange-950/10 dark:via-background dark:to-orange-950/10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Success Message */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              Order Placed Successfully!
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your order. We'll deliver it soon.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="border-2 border-orange-200 dark:border-orange-900/30">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Package className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    Order Details
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Order ID: #{order.orderId.toString()}
                  </CardDescription>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                >
                  {order.status === 'pending' && 'Pending'}
                  {order.status === 'shipped' && 'Shipped'}
                  {order.status === 'delivered' && 'Delivered'}
                  {order.status === 'cancelled' && 'Cancelled'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Customer Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Customer Information</h3>
                <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                  <div className="flex items-start gap-3">
                    <User className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium text-foreground">{order.customerName}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">{order.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Delivery Address</p>
                      <p className="font-medium text-foreground">{order.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Payment Summary */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Payment Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Product MRP</span>
                    <span className="font-medium text-foreground">₹{productMrp}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery Charge</span>
                    <span className="font-medium text-foreground">₹{DELIVERY_CHARGE}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-foreground">Total Amount</span>
                    <span className="text-orange-600 dark:text-orange-400">₹{totalAmount}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-950/20">
                <p className="text-sm font-medium text-orange-900 dark:text-orange-100">
                  Payment Method: Cash on Delivery
                </p>
                <p className="mt-1 text-xs text-orange-700 dark:text-orange-300">
                  Please keep ₹{totalAmount} ready for payment upon delivery
                </p>
              </div>

              {/* WhatsApp Notification Button */}
              <Button
                onClick={handleWhatsAppNotification}
                className="w-full bg-[#25D366] text-white hover:bg-[#20BA5A] dark:bg-[#25D366] dark:hover:bg-[#20BA5A]"
                size="lg"
              >
                <img 
                  src="/assets/generated/whatsapp-icon.dim_48x48.png" 
                  alt="WhatsApp" 
                  className="mr-2 h-5 w-5"
                />
                Send Order Details via WhatsApp
              </Button>
            </CardContent>
            <CardFooter>
              <Button
                onClick={onBackToHome}
                className="w-full bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600"
                size="lg"
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
