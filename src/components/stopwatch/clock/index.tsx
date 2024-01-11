import Style from './clock.module.scss';

export default function Clock(){
    return(
        <>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioDivisao}>:</span>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioNumero}>0</span>
        </>
    )
}