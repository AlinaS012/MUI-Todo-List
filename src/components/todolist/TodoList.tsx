import Todo from "../todo/Todo";
import { Stack } from "@mui/material";
import AddTask from "../addtask/AddTask";
import { Todo as TodoType } from "../../types/contextTypes";


// interface TextListProp {
//     textList: string[];
//     ind: Boolean;
// }
interface TextListProp {
    textList: TodoType[];
    ind?: Boolean;
    title: string;
}

const TodoList: React.FC<TextListProp> = ({ textList, title }) => {
    return (<>
        <Stack
            display={'flex'}
            flexDirection={'column'}
            sx={{
                width: {
                    xs: '90%', md: '90%', lg: '90%'//lg: '75%' 
                }
            }}
            justifyContent={'center'}
            // alignItems={'center'}
            margin={'0 auto'}
            mt={0} mb={0}
        >
            {textList.map(
                (item) => <Todo text={item.title} />
            )}
        </Stack>
        <AddTask sx={{
            width: {
                xs: '90%', md: '90%', lg: '90%'//lg: '75%' 
            },
            margin: '0 auto', display: 'flex', flexDirection: 'row',
            alignItems: 'center', mb: 1
        }}
            option={title}
            variableOptions={true}
        />
    </>)
}

export default TodoList;