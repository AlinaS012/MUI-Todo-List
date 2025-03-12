import {
    Box, 
    Checkbox, 
    Modal, 
    Stack,
    Typography,  
} from "@mui/material";
import React from "react";
import IconifyIcon from "../base/IconifyIcon";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface TodoProps {
    text: string;
}
const todoOptions = (
    <Stack display={'flex'} flexDirection={'row'} gap={2}>
        <IconifyIcon icon={"lucide:pen-line"} />
        <IconifyIcon icon={"iconamoon:trash"} />
    </Stack>
);

const Todo = ({ text }: TodoProps) => {
    const [options, showOptions] = React.useState(false)
    const [openCalendarModal, setOpenCalendarModal] = React.useState(false);
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
    // const handleOpen = () => setOpenCalendarModal(true);
    const handleClose = () => setOpenCalendarModal(false);
    return (<div  onMouseEnter={() => showOptions(true)} onMouseLeave={() => showOptions(false)}>
        {/* {options ? <IconifyIcon sx={{ ml: 2, display:'inline' }} icon="mingcute:dots-fill" /> : null} */}

        <Stack display={'inline'} padding={'1 2'} sx={{ borderBottom: '1px solid #c1c1c1' }}>
            <Stack display={'flex'} justifyContent={'space-between'} flexDirection={'row'}>
                <Box display={'flex'} gap={1} alignItems={'center'}>
                    <Box>
                        {/* {options ? <IconifyIcon sx={{ ml: 2 }} icon="mingcute:dots-fill" /> : null} */}
                        <Checkbox sx={{ borderRadius: '50%' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'gray', fontSize: 13, mt: 0.5 }}>
                        <IconifyIcon sx={{ ml: 0.05, mr: 1, color: 'red', mt: 0.18 }} icon="material-symbols:target" />
                        <Typography sx={{ color: 'gray', fontSize: 13, mt: 0.5 }}> {text}</Typography>

                    </Box>
                </Box>
                <Box mt={2}>
                    {/* {options ? todoOptions : null} */}
                    {todoOptions}
                </Box>
            </Stack>
            {/* <Box sx={{ cursor: 'pointer', alignItems: 'center' }} ml={1.5} onClick={handleOpen}>
                <IconifyIcon sx={{ fontSize: 25, color: 'green' }} icon="mdi:calendar-outline" />
            </Box> */}
        </Stack>
        <Modal
            open={openCalendarModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                        <DateTimePicker
                            label="Controlled picker"
                            value={value}
                            onChange={(newValue) => newValue && setValue(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </Box>
        </Modal>
    </div >)
}

export default Todo;