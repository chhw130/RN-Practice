import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constant/styles";

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
    id: "d1",
    description: "A pair of shoes",
    amount: 60,
    date: new Date(`2021-12-19`),
  },
  {
    id: "d2",
    description: "A pair of trousers",
    amount: 10.99,
    date: new Date(`2021-5-19`),
  },
  {
    id: "d3",
    description: "milk",
    amount: 20.22,
    date: new Date(`2021-7-30`),
  },
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
  {
    id: "e4",
    description: "A pair of shoes",
    amount: 60,
    date: new Date(`2021-12-19`),
  },
  {
    id: "e5",
    description: "A pair of trousers",
    amount: 10.99,
    date: new Date(`2021-5-19`),
  },
  {
    id: "e6",
    description: "milk",
    amount: 20.22,
    date: new Date(`2021-7-30`),
  },
  {
    id: "e7",
    description: "A pair of shoes",
    amount: 60,
    date: new Date(`2021-12-19`),
  },
  {
    id: "e8",
    description: "A pair of trousers",
    amount: 10.99,
    date: new Date(`2021-5-19`),
  },
  {
    id: "e9",
    description: "milk",
    amount: 20.22,
    date: new Date(`2021-7-30`),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expensesList={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingVertical: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
