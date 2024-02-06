import React from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

export interface ExpensesType {
  id: string;
  description: string;
  amount: number;
  date: Date;
}
interface ExpensesOutputProps {
  expenses: ExpensesType[];
  expensesPeriod: string;
}

export const DUMMY_EXPENSES: ExpensesType[] = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 60,
    date: new Date(`2021-12-19`),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 10.99,
    date: new Date(`2021-5-19`),
  },
  {
    id: "e3",
    description: "milk",
    amount: 20.22,
    date: new Date(`2021-7-30`),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expensesList={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
