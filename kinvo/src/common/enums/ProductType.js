import colors from "../styles/colors";
import Enum from '../utils/Enum'

const FUNDS = 1;
 const  PENSION = 2;
 const   POST_FIXED_INCOME = 3;
 const  TREASURY_DIRECT = 4;
 const SAVINGS = 5;
 const PRE_FIXED_INCOME = 6;
 const BITCOIN = 7;
 const STOCK = 8;
 const DEBENTURES = 9;
 const CURRENCY = 10;
 const FII = 11;
 const BDR = 12;

export default ProductType =  Enum({
  FUNDS: {id: FUNDS, name: "Fundo", color: colors.funds },
  PENSION: {id: PENSION, name: "Previdência", color: colors.pension},

},'name')

