import styles from './Header.module.css'



export const Header = ({updateCity,updatePrice, updateSize, updateDateTo, updateDateFrom}) => {

    const date = new Date().setHours(0,0,0,0);
    const today = new Date(date).toISOString().split('T')[0];

    return (
        <>
            <header className={styles.header}> 
                <h1 className={styles.header__title}> Book It</h1>
                <div className= {styles.filtersBox}>
                    <select 
                    onChange={(e)=>updateCity(e.target.value)} 
                    name="" 
                    id="" 
                    className={`${styles.filtersBox__country} ${styles.input}`}>
                        <option value="all">All countries</option>
                        <option value="argentina">Argentina</option>
                        <option value="brasil">Brasil</option>
                        <option value="chile">Chile</option>
                        <option value="uruguay">Uruguay</option>
                    </select>

                    <input
                    min={today}
                    onChange={(e)=> {updateDateFrom(e.target.value)}}
                    type="date" 
                    className={`${styles.filtersBox__input} ${styles.input}`} />

                    <input
                    min={today}
                    onChange={(e)=> {updateDateTo(e.target.value)}} 
                    type="date" 
                    className={`${styles.filtersBox__input} ${styles.input}`} />

                    <select
                    onChange={(e)=> {updatePrice(e.target.value)}} 
                    name="" 
                    id="" 
                    className={`${styles.filtersBox__input} ${styles.input}`}>
                        <option value="all">All prices</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>

                    <select 
                    onChange={(e)=> {updateSize(e.target.value)}}
                    name="" 
                    id="" 
                    className={`${styles.filtersBox__input} ${styles.input}`}>
                        <option value="all">All sizes</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>



                </div>
                    
            </header>
        </>
    )
}