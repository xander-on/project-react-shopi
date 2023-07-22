import { getFormattedDate } from "../../helpers";

export const OrderInfo = ({ order }) => {

    const generateSpaces = ( count=1 ) => {
        return String.fromCharCode(160).repeat(count);
    }

    return (
        <div>
            <p>
                <span className="font-semibold">
                    Order Id{generateSpaces(3)}:
                </span> 
                { generateSpaces(2) }{ order.date} 
            </p>
            <p>
                <span className="font-semibold">
                    Fecha{generateSpaces(7)}:
                </span>
                { generateSpaces(2) }{ getFormattedDate(order.date) }
            </p>
            <p>
                <span className="font-semibold">
                    Total{ generateSpaces(9) }: 
                </span>
                { generateSpaces(2) }${ order.totalPrice }
            </p>
        </div>
    );
}
