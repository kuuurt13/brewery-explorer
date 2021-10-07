import {
  Bar,
  BarChart as ReBartChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import useTheme from "../../hooks/useTheme";

type Data = {
  name: string;
  value: number;
};

type Props = {
  data: Data[];
  barTitle: string;
};

export default function BartChart({ data, barTitle }: Props) {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReBartChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" name={barTitle} fill={theme.colors.primary} />
      </ReBartChart>
    </ResponsiveContainer>
  );
}
