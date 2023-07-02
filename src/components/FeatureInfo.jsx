// import "./FeatureInfo.css";
import styled from "@emotion/styled";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

export default function FeaturedInfo() {
  return (
    <Container>
      <FeaturedItem>
        <Typography variant="h8" sx={{}}>
          Revenue
        </Typography>
        <MoneyContainer>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            $3432
          </Typography>
          <Box sx={{ margin: "0 5px 2px 10px" }}>
            <Typography variant="h11" sx={{ fontSize: "13px" }}>
              -11.2
            </Typography>
          </Box>{" "}
          <ArrowDownward sx={{ fontSize: "13px", color: "red" }} />
        </MoneyContainer>
        <Typography variant="h8" sx={{ color: "gray" }}>
          Compared to Last month
        </Typography>
      </FeaturedItem>

      <FeaturedItem>
        <Typography variant="h8" sx={{}}>
          Revanue
        </Typography>
        <MoneyContainer>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            $3432
          </Typography>
          <Box sx={{ margin: "0 5px 2px 10px" }}>
            <Typography variant="h11" sx={{ fontSize: "13px" }}>
              -11.2
            </Typography>
          </Box>{" "}
          <ArrowDownward sx={{ fontSize: "13px", color: "red" }} />
        </MoneyContainer>
        <Typography variant="h8" sx={{ color: "gray" }}>
          Compared to Last month
        </Typography>
      </FeaturedItem>

      <FeaturedItem>
        <Typography variant="h8" sx={{}}>
          Revanue
        </Typography>
        <MoneyContainer>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            $3432
          </Typography>
          <Box sx={{ margin: "0 5px 2px 10px" }}>
            <Typography variant="h11" sx={{ fontSize: "13px" }}>
              -11.2
            </Typography>
          </Box>{" "}
          <ArrowDownward sx={{ fontSize: "13px", color: "red" }} />
        </MoneyContainer>
        <Typography variant="h8" sx={{ color: "gray" }}>
          Compared to Last month
        </Typography>
      </FeaturedItem>
    </Container>
  );
}
