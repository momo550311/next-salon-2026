"use client"

import { createContext, useContext, useReducer } from "react"

export const TOTAL_STEPS = 4

// 状態のデータ型
export type BookingState = {
  step: number
  menuId: string | null
  staffId: string | null
  date: string | null
  time: string | null
  notes: string
}

// 初期値
const INITIAL_STATE: BookingState = {
  step: 1,
  menuId: null,
  staffId: null,
  date: null,
  time: null,
  notes: "",
}

// アクションのデータ型
export type BookingAction =
  | { type: "select-menu"; menuId: string }
  | { type: "select-staff"; staffId: string | null }
  | { type: "select-date"; date: string }
  | { type: "select-time"; time: string }
  | { type: "change-notes"; notes: string }
  | { type: "next" }
  | { type: "prev" }