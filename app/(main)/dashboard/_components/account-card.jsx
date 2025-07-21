"use client"

import React from 'react'
import { ArrowUpRight, ArrowDownRight, CreditCard } from 'lucide-react'
import { useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import Link from 'next/link'
import useFetch from "@/hooks/use-fetch";
import { updateDefaultAccount } from '@/actions/account'
import { toast } from 'sonner'

const AccountCard = ({ account }) => {

  const { name, type, balance, id, isDefault } = account;

    const {
    loading: updateDefaultLoading,
    fn: updateDefaultFn,
    data: updatedAccount,
    error,
  } = useFetch(updateDefaultAccount);


  const handleDefaultChange = async (event) => {
    event.preventDefault(); // Prevent navigation

    if (isDefault) {
      toast.warning("You need atleast 1 default account");
      return; // Don't allow toggling off the default account
    }

    await updateDefaultFn(id);
  };

    useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Default account updated successfully");
    }
  }, [updatedAccount]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update default account");
    }
  }, [error]);


  return (
    <Card className="hover:shadow-md transition-shadow group relative p-4">
      <Link href={`/account/${id}`} className="block space-y-4">
        <CardHeader className="flex flex-row items-center justify-between p-0">
          <CardTitle className="text-sm font-medium capitalize">
            {name}
          </CardTitle>
          <Switch checked={isDefault}
          onClick={handleDefaultChange}
          disabled={updateDefaultLoading} />
        </CardHeader>
        <CardContent className="p-0 space-y-1">
          <div className="text-2xl font-bold">
            ${parseFloat(balance).toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            {type.charAt(0) + type.slice(1).toLowerCase()} Account
          </p>
        </CardContent>
        <CardFooter className="p-0 flex justify-between text-sm text-muted-foreground pt-2">
          <div className="flex items-center gap-1">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            Income
          </div>
          <div className="flex items-center gap-1">
            <ArrowDownRight className="h-4 w-4 text-red-500" />
            Expense
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}

export default AccountCard
