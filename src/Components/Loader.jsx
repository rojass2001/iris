import {PulseLoader} from 'react-spinners'
function Loader() {
  return (
    <div className='w-full flex items-center place-content-center'>
      <PulseLoader size={15} color='#FF00FF'/>
    </div>
  )
}

export default Loader
