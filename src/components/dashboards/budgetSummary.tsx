import { Box, Typography, Card, CardContent, Stack } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BudgetSummary = () => {
  // Data for the chart
    const data = {
        labels: ["Watch", "Health Care", "Traveling"],
        datasets: [
        {
            data: [10, 20, 70],
            backgroundColor: ["#d0f0c0", "#a4de02", "#008000"],
            hoverBackgroundColor: ["#a8ddb5", "#91d302", "#006400"],
        },
        ],
    };

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#FFFFFF",
      }}
    >
        <CardContent>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography sx={{fontFamily: 'Poppins', fontWeight: 600,fontSize: '15px',lineHeight: '22.5px', mb: 2, }}>Your Expending Summary</Typography>
                <Typography sx={{fontFamily: 'Poppins', fontWeight: 400,fontSize: '10px',lineHeight: '15px', mb: 2, }}>This Week <ExpandMoreIcon/></Typography>
            </Box>
                
            <Typography sx={{ fontWeight: 600, fontFamily: 'Poppins',fontSize: '28px',lineHeight: '24px', mb: 1, color: '#6DB33F' }}>$1,800.00</Typography>
            <Typography variant="subtitle1" color="text.secondary">10 transactions</Typography>

            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box sx={{ mt: 3, width:'97px', height: '97px' }}>
                <Doughnut
                    data={data}
                    options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display:false, // Disable the legend
                        },
                        tooltip: {
                        enabled: true, // Disable tooltips
                        },
                    },
                    }}
                />
                </Box>
                <Stack direction="column" spacing={1} sx={{ mt: 3 }}>
                    <Typography variant="body2">
                        <span style={{ color: "#d0f0c0", marginRight: 5 }}>●</span> Watch: 10%
                    </Typography>
                    <Typography variant="body2">
                        <span style={{ color: "#a4de02", marginRight: 5 }}>●</span> Health Care: 20%
                    </Typography>
                    <Typography variant="body2">
                        <span style={{ color: "#008000", marginRight: 5 }}>●</span> Traveling: 70%
                    </Typography>
                </Stack>
            </Box>
        </CardContent>
    </Card>
  );
};

export default BudgetSummary;
