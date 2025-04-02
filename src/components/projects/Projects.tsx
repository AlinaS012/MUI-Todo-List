import React from "react";
import AddTask from "../addtask/AddTask"
import { Box, FormControlLabel, Slide, Stack, Switch, Tooltip, Typography } from "@mui/material";
import TodoList from "../todolist/TodoList";
import IconifyIcon from "../base/IconifyIcon";
import RightTab from "../righttab/RightTab";
import { Project, ProjectList } from "../../types/contextTypes";
import AddProjectModal from "../addprojectmodal/AddProjectModal";
// interface ProjectsListProp {
//     projectsList: {
//         title: string;
//         todos: string[];
//     }[]
// }

interface OpenList {
    openList: boolean[];
}

// const projectsList: ProjectsListProp = [
//     {
//         title: 'Routines',
//         todos: ["Added todo", "Added todo"]
//     },
//     {
//         title: 'Inspirations',
//         todos: ["Added todo", "Added todo"]
//     }
// ]
const Projects = ({ projectsList }: { projectsList: Project[] }) => {
    const [openList, setOpenList] = React.useState<Boolean[]>([]);
    const [checked, setChecked] = React.useState<Boolean[]>([]);
    const [openProjectModal, setOpenProjectModal] = React.useState<boolean>(false)

    React.useEffect(() => {
        const listArr = Array(projectsList.length).fill(false)//true
        setOpenList([...listArr])
        const listArrFalse = Array(projectsList.length).fill(false)
        setChecked([...listArrFalse])
    }, [])
    React.useEffect(() => {
        console.log(openList, "openList")
    }, [openList])
    React.useEffect(() => {
        console.log(openProjectModal, "change in modal state")
    }, [openProjectModal])
    return (<Box display={'flex'}>
        <Box flex={10}>
            <Stack
                sx={{
                    width: {
                        xs: '90%', md: '90%', lg: '90%'//lg: '75%' 
                    }
                }}
                margin={'0 auto'}
                marginBottom={1} marginTop={6} display={'flex'} flexDirection={'row'}
                gap={1.5} alignItems={'center'}
            >
                <Box
                    sx={{
                        width: {
                            xs: '90%', md: '90%', lg: '90%'//lg: '75%' 
                        }
                    }}
                    margin={'0 auto'}
                    marginBottom={1} marginTop={6} display={'flex'} flexDirection={'row'}
                    gap={1.5} alignItems={'center'}
                >
                    <Typography variant="h2">Home</Typography>
                    <IconifyIcon sx={{ fontSize: 36 }} icon={"twemoji:house"} />
                </Box>
                <Tooltip title="Add Project">
                    <Box
                        sx={{
                            "&:hover": {
                                cursor: "pointer"
                            }
                        }}
                        onClick={() => setOpenProjectModal(true)}
                    >
                        <IconifyIcon sx={{ fontSize: 20 }} color="primary" icon="ic:round-plus" />
                    </Box>
                </Tooltip>
            </Stack>
            <AddTask sx={{
                width: {
                    xs: '90%', md: '90%', lg: '90%'
                    // lg: '75%' 
                },
                margin: '0 auto', display: 'flex', flexDirection: 'row',
                alignItems: 'center', mb: 1
            }}

            />

            <Box sx={{ mt: 6 }}>
                {
                    projectsList.map((listitem, index) => {
                        return (
                            <>
                                <Box
                                    key={index}
                                    sx={{
                                        width: {
                                            xs: '90%', md: '90%', //lg: '75%' 
                                            lg: '90%'
                                        }
                                    }}
                                    margin={'0 auto'} marginBottom={0} display={'flex'}
                                    alignItems={'center'} gap={2}
                                >
                                    <Box onClick={() => setOpenList(val => {
                                        const newVal = [...val];
                                        newVal[index] = !newVal[index]
                                        return newVal
                                    })}
                                    // display={'inline'}
                                    >
                                        {openList[index] ?
                                            <IconifyIcon color={'gray'} icon="raphael:arrowdown" />
                                            : <IconifyIcon color={'gray'} icon="raphael:arrowright" />
                                        }
                                    </Box>
                                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} padding={'1rem'}>
                                        <Typography
                                            // sx={{
                                            //     width: { xs: '90%', md: '90%', lg: '75%' }
                                            // }}
                                            sx={{ width: '100%', fontSize: '0.9rem' }}
                                            // display={'flex'}
                                            variant="h6" //margin={'0 auto'} marginBottom={0}
                                            borderBottom={"1px solid #d3d3d3"} pb={1}
                                            color="gray"
                                        >
                                            {listitem.title}
                                            <IconifyIcon icon={"noto-v1:night-with-stars"} sx={{ ml: 1, fontSize: 30 }} />
                                            <Typography display="inline" sx={{ ml: 1 }} color="#d3d3d3">2</Typography>
                                        </Typography>
                                        <Box
                                            sx={{
                                                height: '1.5rem',
                                                width: '1.5rem', display: "flex",
                                                borderRadius: '3px',
                                                alignItems: 'center',
                                                justifyContent: 'space-around', cursor: 'pointer',
                                                "&:hover": {
                                                    backgroundColor: 'rgba(25,25,25,0.1)',
                                                }
                                            }}><IconifyIcon icon="solar:menu-dots-outline" /></Box>
                                    </Box>
                                </Box>
                                
                                {openList[index]
                                    &&

                                    <TodoList title={listitem.title} ind={checked[index]}
                                        textList={listitem.todos} />
                                }
                            </>
                        )
                    })
                }
            </Box >
        </Box>
        <RightTab />
        {openProjectModal && <AddProjectModal open={openProjectModal} setOpen={setOpenProjectModal} />}
    </Box>)
}

export default Projects;