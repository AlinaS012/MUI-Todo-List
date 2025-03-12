import { Box, Checkbox, Divider, Typography } from "@mui/material";
import React from "react";
import IconifyIcon from "../base/IconifyIcon";

const RightTab = () => {
    const list = [
        { title: 'Inbox', desc: 'Where your temporary ideas and tasks gather.' },
        { title: "Smart List", desc: 'Tasks with due dates will intelligently appear in the "Today" and "Next 7 Days" lists, providing a clear overview of what needs to be done each day.' },
        { title: 'List', desc: 'You can also add lists to manage tasks(such as work, life, etc.) according to your usage habits.' }
    ]
    const videoRef = React.useRef(null)
    React.useEffect(()=>{
        if(videoRef){
            (videoRef.current as any).play()
        }
    },[videoRef])
    return (
        <Box flex={7} display={{ xs: 'none', md: 'block', lg: 'block' }} borderLeft={"1px solid rgba(25,25,25, 0.1)"}>
            <Box display={'flex'} borderBottom={"1px solid rgba(25,25,25, 0.1)"} height={20} justifyContent={'space-between'} padding={"1.2rem 0.7rem"} alignItems={'center'} >
                <Box display={'flex'} gap={0.8} justifyContent={'center'} alignItems={'center'} >
                    <Checkbox sx={{borderColor: "rgba(25,25,25,0.3)"}} />
                    <Divider orientation="vertical" flexItem />
                    <Box display={'flex'} flexDirection={'row'} gap={1} alignItems={'center'}>
                        <IconifyIcon icon="solar:calendar-bold" sx={{ color: "rgba(25,25,25,0.3)" }} />
                        <Typography variant="h6" color="rgba(25,25,25,0.3)">     Due Date
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <IconifyIcon icon="iconamoon:flag" sx={{ fontSize: 22, alignSelf: 'top', mt: 1, color: "rgba(25,25,25,0.3)" }} />
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} padding={"1.2rem"} pb={0} alignItems={'center'}>
                <Box display={'flex'} gap={1} flexDirection={'row'} alignItems={'center'}>
                    <IconifyIcon icon="fxemoji:notepad" />
                    <Typography variant="h6">Use lists to manage tasks</Typography>
                </Box>
                <Box><IconifyIcon icon="jam:menu" sx={{ color: "rgba(25,25,25,0.3)" }} /></Box>
            </Box>
            <Box padding={"0.2rem 1.2rem"}>
                <Typography variant="h6" fontSize={12}>
                    As the number of tasks grows, you can use lists to categorize and organize them.
                </Typography>
            </Box>
            <Box padding={"0.7rem"} display={'flex'} justifyContent={'flex-start'}>
                <ul style={{ display: 'flex', flexDirection: 'column', fontSize: 13 }}>{
                    list.map((li) => {
                        return (
                            <li>
                                <span> <strong>{li.title}</strong>: {li.desc}</span>
                            </li>
                        )
                    })
                }</ul>
            </Box>
            <Box padding={"0.7rem 1.2rem"} >
                <video ref={videoRef} id="vid" loop controls muted style={{ borderRadius: '5px', width: '100%' }}>
                    <source src="./videos/list.mp4" type="video/mp4" />
                </video>
                {/* <script>
                    {document.getElementById('vid').play()}
                </script> */}
            </Box>
        </Box>)
}

export default RightTab