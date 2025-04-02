import { Box, Button, FormControl, InputLabel, Menu, MenuItem, TextField, Typography, SxProps, Tooltip } from "@mui/material";
import React, { useContext, useState } from "react";
import IconifyIcon from "../base/IconifyIcon";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { State, TodoListContext } from "../../context/TodoListContext";
import { violet } from "../../theme/colors";
import { Project } from "../../types/contextTypes";

interface AddTaskProps {
    sx?: SxProps;
    variableOptions?: boolean;
    option?: string
}

const AddTask: React.FC<AddTaskProps> = ({ sx, variableOptions, option }) => {
    const todoValidationSchema = yup.object({
        todo: yup
            .string().min(3, "Too short").max(50, "too long")

    });

    const [open, setOpen] = React.useState(false)
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const openDd = Boolean(anchorEl);
    // const handleClick = (event: any) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    const [plus, setPlus] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState<string>('')
    const { dispatch, state } = React.useContext(TodoListContext);
    const [projectTodos, setProjectTodos] = React.useState<Project[]>();

    React.useEffect(() => {
        setProjectTodos(state.projectTodos)
        if (!variableOptions) {
            setSelectedValue(state.projectTodos[0].title)
        } else {
            setSelectedValue(option as string)
        }
    }, [state.projectTodos])
    const formik = useFormik({
        initialValues: {
            todo: '',
            // project: ''
        },
        validationSchema: todoValidationSchema,
        onSubmit: (values) => {
            if (!selectedValue) {
                return
            }
            // alert(JSON.stringify(values, null, 2));
            dispatch({ project: selectedValue, todo: { title: values.todo }, type: 'addTodoProject' })
        },
    });

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    React.useEffect(() => {
        console.log(selectedValue, "selected change")
    }, [selectedValue])
    if (!open) {
        return (<Box sx={{ ...sx, mt: 5, gap: '1.5rem' }} onClick={() => setOpen(true)} onMouseEnter={() => setPlus(true)} onMouseLeave={() => setPlus(false)}>
            <Box>{!plus ? <IconifyIcon sx={{
                fontSize: 30,
                color: violet[500]
                //color: '#dc4c3e' 
            }} icon="ic:round-plus" /> : <IconifyIcon
                // color='#dc4c3e' 
                color={violet[500]}
                sx={{ fontSize: 30 }} icon="pepicons-pencil:plus-circle-filled" />}</Box>
            <Typography color="gray" fontSize={16}>Add Task</Typography>
        </Box>)
    } else {
        return (
            <Box sx={{
                border: '1px solid #d3d3d3', borderRadius: '1rem',
                width: {
                    sx: '90%', md: '90%', lg: '90%',//lg: '75%' 

                }, margin: '0 auto', my: 2, px: 1,
            }}>
                <form onSubmit={formik.handleSubmit}>

                    <Box sx={{ borderBottom: '1px solid #d3d3d3', display: 'flex', px: 1, pt: 1.5, ...sx, gap: '0.7rem', flexDirection: 'column', alignItems: "flex-start", width: '100%' }}>

                        <TextField
                            fullWidth
                            id="todo"
                            name="todo"
                            // label="Task"
                            placeholder="Replace lightbulb tomorrow at 3pm!"
                            type="text"
                            value={formik.values.todo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.todo && Boolean(formik.errors.todo)}
                            helperText={formik.touched.todo && formik.errors.todo}
                            sx={{ border: 'none', pt: 1 }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                            <Button variant="contained" sx={{ padding: 1, fontSize: 10 }} >Date<IconifyIcon sx={{ mt: 0.1, ml: 0.2, fontSize: 14 }} icon="mdi-light:calendar" /></Button>
                            <Button variant="contained" sx={{ padding: 1, fontSize: 10 }} >Priority<IconifyIcon sx={{ mt: 0.1, ml: 0.2, fontSize: 14 }} icon="mdi-light:calendar" /></Button>
                            <Button variant="contained" sx={{ padding: 1, fontSize: 10 }} >Reminders<IconifyIcon sx={{ mt: 0.1, ml: 0.2, fontSize: 14 }} icon="mdi-light:calendar" /></Button>
                        </Box>
                        <Box sx={{ borderRadius: '1rem', backgroundColor: "#fdf5e2", width: '100%', mb: 1, border: "1px solid #ccc", display: 'flex', flexDirection: 'row', pr: "2rem", pl: '2rem', pt: "0.5rem", pb: "0.5rem", mt: 0 }}>
                            <Box sx={{ flex: 1 }}>
                                <IconifyIcon sx={{ fontSize: 28 }} icon="material-symbols:target" />
                            </Box>
                            <Box sx={{ flex: 12 }}>
                                <Typography sx={{
                                    fontSize: '0.9rem',//'1.1rem', 
                                    fontWeight: 400
                                }}
                                    variant="h6">New: Deadlines</Typography>
                                <Typography sx={{
                                    fontSize: '0.7rem',//'0.9rem', 
                                    fontWeight: 300
                                }} color="gray" variant="h5">Stay on track by setting clear deadlines. Select a date to complete your tasks on time.</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center', mx: 0, px: 1.5, mb: 1, justifyContent: 'space-between', width: '100%'
                    }}>
                        <div>
                            <Tooltip title="Select From Your Project">

                                <Button
                                    id="demo-positioned-button"
                                    variant="contained"
                                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{ padding: 1, pr: 1.5 }}
                                >
                                    <Box
                                        sx={{ display: 'flex', alignItems: 'center' }}
                                    >{openMenu ? <IconifyIcon sx={{
                                        fontSize: 18,
                                        //color: '#dc4c3e' 
                                    }} icon="ep:arrow-up" /> :
                                        <IconifyIcon
                                            // color='#dc4c3e' 

                                            sx={{ fontSize: 18 }} icon="ep:arrow-right" />}</Box>

                                    {selectedValue}
                                </Button>
                            </Tooltip>
                            <Menu
                                id="demo-positioned-menu"
                                // aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={openMenu}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                {variableOptions ?
                                    <MenuItem onClick={() => { setSelectedValue(option as string); handleClose() }} value={option}>{option}</MenuItem>
                                    : (
                                        projectTodos?.map((el: Project) => {
                                            return (<>
                                                <MenuItem onClick={() => { setSelectedValue(el.title); handleClose() }} value={el.title}>{el.title}</MenuItem>
                                            </>)
                                        })
                                    )}
                            </Menu>
                        </div>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button title="Cancel" variant="contained" onClick={() => setOpen(false)}>Cancel</Button>
                            <Button title="Add Task" type="submit" variant="contained" color="primary" >Add Task</Button>
                        </Box>
                    </Box>

                </form>

            </Box>
        )
    }
}

export default AddTask;