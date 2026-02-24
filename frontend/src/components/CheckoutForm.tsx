import { useState } from 'react';
import { usePlaceOrder } from '../hooks/useQueries';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { ArrowLeft, Loader2, Package } from 'lucide-react';
import type { Product } from '../backend';

interface CheckoutFormProps {
  product: Product;
  onOrderPlaced: (orderId: bigint) => void;
  onCancel: () => void;
}

const DELIVERY_CHARGE = 50;

export default function CheckoutForm({ product, onOrderPlaced, onCancel }: CheckoutFormProps) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; address?: string; phone?: string }>({});

  const { mutate: placeOrder, isPending, error } = usePlaceOrder();

  const mrpInRupees = Number(product.mrp);
  const totalAmount = mrpInRupees + DELIVERY_CHARGE;

  const validateForm = () => {
    const newErrors: { name?: string; address?: string; phone?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!address.trim()) {
      newErrors.address = 'Delivery address is required';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    placeOrder(
      {
        productId: product.id,
        name: name.trim(),
        address: address.trim(),
        phone: phone.trim(),
      },
      {
        onSuccess: (orderId) => {
          onOrderPlaced(orderId);
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-background to-orange-50/30 py-12 dark:from-orange-950/10 dark:via-background dark:to-orange-950/10">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={onCancel}
          className="mb-6 text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Order Summary */}
          <Card className="border-2 border-orange-200 dark:border-orange-900/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Package className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                Order Summary
              </CardTitle>
              <CardDescription>Review your order details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 border-orange-200 dark:border-orange-900/30">
                  <img
                    src={product.imagePath}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Product MRP</span>
                  <span className="font-medium text-foreground">₹{mrpInRupees}</span>
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

              <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-950/20">
                <p className="text-sm font-medium text-orange-900 dark:text-orange-100">
                  Payment Method: Cash on Delivery
                </p>
                <p className="mt-1 text-xs text-orange-700 dark:text-orange-300">
                  Pay ₹{totalAmount} when your order is delivered
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Checkout Form */}
          <Card className="border-2 border-orange-200 dark:border-orange-900/30">
            <CardHeader>
              <CardTitle className="text-2xl">Delivery Details</CardTitle>
              <CardDescription>Enter your information for delivery</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter 10-digit phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={errors.phone ? 'border-destructive' : ''}
                  />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your complete delivery address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={4}
                    className={errors.address ? 'border-destructive' : ''}
                  />
                  {errors.address && <p className="text-sm text-destructive">{errors.address}</p>}
                </div>

                {error && (
                  <div className="rounded-lg border-2 border-destructive bg-destructive/10 p-4">
                    <p className="text-sm text-destructive">
                      Failed to place order. Please try again.
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  disabled={isPending}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="flex-1 bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Placing Order...
                    </>
                  ) : (
                    'Place Order'
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
