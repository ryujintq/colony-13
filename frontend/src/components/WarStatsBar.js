import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import Button from "./Button"

const WarStatsBar = ({ pastWars }) => {
    const { isLeader } = useSelector(state => state.auth.user)
    const history = useHistory()

    const handleButtonClick = () => {
        history.push('/newwar')
    }

    const totalWins = pastWars.filter(war => war.result === 'Victory').length

    return (
        <div className='mt-5 flex justify-between flex-col sm:flex-row items-center'>
            <div className='flex'>
                <p className='mr-5'>Wars: {pastWars.length}</p>
                <p className='mr-5'>Wins: {totalWins}</p>
                <p className='mr-5'>Losses: {pastWars.length - totalWins}</p>
                <p className='mr-5'>Win Ratio: {!pastWars.length ? '-' : (totalWins / pastWars.length).toFixed(2) * 100}%</p>
            </div>
            {isLeader && (
                <div className='w-32 sm:mt-0'>
                    <Button text='Start new war' onClick={handleButtonClick} />
                </div>
            )}
        </div>
    )
}

export default WarStatsBar
