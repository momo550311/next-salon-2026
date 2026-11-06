"use client"

import { Menu } from "@/types/menu";
import { Shop } from "@/types/shop";
import { Staff } from "@/types/staff";

// BookingContextインポート
import { BookingProvider, TOTAL_STEPS, canGoNext, useBooking } from "@/contexts/BookingContext";

// rfc スニペットを使うと楽
import React from 'react'

export default function BookingForm() {
    return (
        <div>
            Booking Form
        </div>
    )
}
