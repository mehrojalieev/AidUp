import { useTranslation } from 'react-i18next'
import Container from '../../utils/Utils'
import'./Statistics.scss'
import CountUp from 'react-countup'

const Statistics = () => {
  const {t} = useTranslation()
  return (
    <div className='statistics'>
      <Container>
      <div className="staistic-wrapper">
          <div className="statistic-item">
            <div className="item-header">
              <CountUp className='item-count' end={100} duration={7}/>
              <span className='plus material-symbols-outlined'>add</span>
            </div>
            <p className='item-info'>{t("statistic.patient")} </p>
          </div>
          <div className="statistic-item">
            <div className="item-header">
              <CountUp className='item-count' end={236} duration={7}/>
              <span className='plus material-symbols-outlined'>add</span>
            </div>
            <p className='item-info'>{t("statistic.doctor")} </p>
          </div>
          <div className="statistic-item">
            <div className="item-header">
              <CountUp className='item-count' end={160} duration={7}/>
              <span className='plus material-symbols-outlined'>add</span>
            </div>
            <p className='item-info'>{t("statistic.operation")} </p>
          </div>
          <div className="statistic-item">
            <div className="item-header">
              <CountUp className='item-count' end={320} duration={7}/>
              <span className='plus material-symbols-outlined'>add</span>
            </div>
            <p className='item-info'>{t("statistic.award")} </p>
          </div>
      </div>
      </Container>
    </div>
  )
}

export default Statistics
