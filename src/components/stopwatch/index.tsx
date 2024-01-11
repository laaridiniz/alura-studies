import Button from "../button";
import Clock from "./clock";
import Style from "./stopwatch.module.scss";

export default function Stopwatch(){
    return(
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um card e inicie o cronômetro:</p>
            <div className={Style.relogioWrapper}>
                <Clock/>
            </div>
            <Button>Começar</Button>
        </div>
    )
}