import st from './ResultItem.module.css'

interface ListItemProps {
    name?: string,
    email?: string,
    points: number
}
export const ListItem = (props: ListItemProps) => {

    return(
        <div className={st.gridItem}>
            {props.name && <p className={st.itemName}>{props.name}</p>}
            {props.points && <p className={st.itemPoints}>{props.points}</p>}
        </div>
    )
};