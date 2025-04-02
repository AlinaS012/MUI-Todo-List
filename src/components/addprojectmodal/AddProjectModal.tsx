import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { TodoListContext } from "../../context/TodoListContext";
import * as yup from 'yup';

interface AddProjectModalProp {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const projectValidationSchema = yup.object({
    project: yup
        .string().min(3, "Too short").max(50, "too long")

});

const AddProjectModal: React.FC<AddProjectModalProp> = ({ open, setOpen }) => {
    React.useEffect(() => {
        console.log(open, setOpen)
    })

    const { dispatch } = React.useContext(TodoListContext);
    const formik = useFormik({
        initialValues: {
            project: '',
        },
        validationSchema: projectValidationSchema,
        onSubmit: (values) => {
            if (values.project) {
                dispatch({ project: values.project, type: 'addProject' })
                setOpen(false)
            }
        },
    });
    if (open) {
        return (<>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
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
                    boxShadow: 24,
                    p: 4,
                }}>
                    <form onSubmit={formik.handleSubmit}>

                        <Box sx={{ borderBottom: '1px solid #d3d3d3', display: 'flex', px: 1, pt: 1.5, gap: '0.7rem', flexDirection: 'column', alignItems: "flex-start", width: '100%' }}>
                            <TextField
                                fullWidth
                                id="project"
                                name="project"
                                // label="Add todo class"
                                placeholder="Add class for todos"
                                type="text"
                                variant="outlined"
                                value={formik.values.project}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.project && Boolean(formik.errors.project)}
                                helperText={formik.touched.project && formik.errors.project}
                                sx={{ border: 'none', pt: 1 }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', mt: 2 }}>
                            <Button title="Cancel" variant="contained" onClick={() => setOpen(false)}>Cancel</Button>
                            <Button title="Add Project" type="submit" variant="contained" color="primary" >Add Project</Button>
                        </Box>

                    </form>

                </Box>
            </Modal >
        </>)
    }

}

export default AddProjectModal