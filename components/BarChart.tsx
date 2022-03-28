import {
  Bar,
  BarChart as ReBartChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import styled from "styled-components";
import useTheme from "../hooks/useTheme";

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
    <StyledChartWrapper width="100%" height="100%">
      <ReBartChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" name={barTitle} fill={theme.colors.primary} />
      </ReBartChart>
    </StyledChartWrapper>
  );
}

const StyledChartWrapper = styled(ResponsiveContainer)`
  .recharts-default-tooltip .recharts-tooltip-label {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
