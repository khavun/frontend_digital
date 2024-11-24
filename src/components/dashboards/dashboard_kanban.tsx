import { Grid, Typography, Stack, Box } from '@mui/material';
import Kanban from './kanban';
import { ArrowDown as ArrowDownIcon } from '@phosphor-icons/react/dist/ssr/ArrowDown';
import { ArrowUp, ArrowUp as ArrowUpIcon } from '@phosphor-icons/react/dist/ssr/ArrowUp';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const DashboardKanban = () => {
    const title1 = (
        <Box sx={{display: 'flex', justifyContent: 'space-between', color: 'white', alignItems: 'center'}}>
            <Typography sx={{marginLeft: '15px', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight:'24px'}}>Total Balance</Typography>
            <MoreVertIcon/>
        </Box>
    );

    const title2 =(
        <Typography sx={{marginLeft: '15px', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight:'24px'}}>
            Income
        </Typography>
    );

    const title3 =(
        <Typography sx={{marginLeft: '15px', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight:'24px'}}>
            Income
        </Typography>
    );

    const title4 =(
        <Typography sx={{marginLeft: '15px', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight:'24px'}}>
            Budget saving
        </Typography>
    );

    const value1=(
        <Typography sx={{fontFamily: 'Poppins', fontWeight: 700, fontSize: '28px', lineHeight: '24px', color: 'white'}}>$ 5,000.00</Typography>
    );

    const value2=(
        <Typography sx={{fontFamily: 'Poppins', fontWeight: 700, fontSize: '28px', lineHeight: '24px'}}>$ 3,500.00</Typography>
    );

    const value3=(
        <Typography sx={{fontFamily: 'Poppins', fontWeight: 700, fontSize: '28px', lineHeight: '24px'}}>$ 1,800.00</Typography>
    );

    const value4=(
        <Typography sx={{fontFamily: 'Poppins', fontWeight: 700, fontSize: '28px', lineHeight: '24px'}}>$ 1,200.00</Typography>
    );


    const diff1 =(
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '10px'}} direction="row" spacing={0.5}>
                <ArrowUpIcon/>
                <Typography variant="body2">6.12 %</Typography>
              </Stack>
              <Typography variant="caption" sx={{color: 'white'}}>vs last month</Typography>
        </Stack>
    );
    const diff2 =(
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ alignItems: 'center', backgroundColor: '#6DB33F1A', borderRadius: '10px'}} direction="row" spacing={0.5}>
                <ArrowUpIcon/>
                <Typography variant="body2">6.12 %</Typography>
              </Stack>
              <Typography variant="caption">vs last month</Typography>
        </Stack>
    );
    const diff3 =(
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ alignItems: 'center', backgroundColor: '#6DB33F1A', borderRadius: '10px'}} direction="row" spacing={0.5}>
                <ArrowUpIcon/>
                <Typography variant="body2">6.12 %</Typography>
              </Stack>
              <Typography variant="caption">vs last month</Typography>
        </Stack>
    );
    const diff4 =(
        <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ alignItems: 'center', backgroundColor: '#6DB33F1A', borderRadius: '10px'}} direction="row" spacing={0.5}>
                <ArrowUpIcon/>
                <Typography variant="body2">6.12 %</Typography>
              </Stack>
              <Typography variant="caption">vs last month</Typography>
        </Stack>
    );

    const forward=(
        <Box sx={{height: '24px', width: '24px', marginLeft: 'auto', borderRadius: '50%', border: '1px solid black', marginTop: '2px', marginRight: '2px', alignItems: 'center' }}>
            <ArrowOutwardIcon sx={{color:'#A6A9AE'}}/>
        </Box>
    );

    const kanbanData = [
        { forward: null, diff: diff1, value: value1, title: title1, bg: '#6DB33F' },
        { forward: forward, diff: diff2, value: value2, title: title2, bg: '#FFFFFF' },
        { forward:forward, diff: diff3, value: value3, title: title3, bg: '#FFFFFF'},
        { forward: forward, diff: diff4, value: value4, title: title4,bg: '#FFFFFF' },
    ];

    return (
        <Grid container spacing={3}>
            {kanbanData.map((item, index) => (
                <Grid
                    key={index}
                    item
                    lg={3}
                    sm={12}
                    xs={12}
                >
                    <Kanban
                        forward={item.forward}
                        diff={item.diff}
                        sx={{ height: '100%', backgroundColor: item.bg, borderRadius: '10px'}}
                        value={item.value}
                        title={item.title}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default DashboardKanban;
