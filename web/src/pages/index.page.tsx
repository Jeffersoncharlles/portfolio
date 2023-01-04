import { GetStaticProps, GetStaticPropsContext } from 'next'
import { cmsService } from '../services/cmsServices'

export { default } from './home'



export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {

  const carousel = await cmsService.getProject()

  return {
    props: {
      carousel
    },
    revalidate: 60 * 60 * 24 //24horas
  }

}
