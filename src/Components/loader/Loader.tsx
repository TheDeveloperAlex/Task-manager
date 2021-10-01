import Loader from "react-loader-spinner"
import { LoaderWrapper } from "./LoaderStyled"

const LoaderSpinner = () => {
  return (
    <LoaderWrapper>
      <Loader type="ThreeDots" color="#FF6B08" height={80} width={80} />
    </LoaderWrapper>
  )
}

export default LoaderSpinner
