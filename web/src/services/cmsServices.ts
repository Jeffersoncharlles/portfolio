import { getPrismicClient } from "../lib/prismic"
import { RichText } from 'prismic-dom'

export const cmsService = {
  async getProject() {

    const prismic = getPrismicClient()

    const response = await prismic.getByType('project',
      {
        fetch: ['project.title', 'project.imageprojects', 'project.content'],
        pageSize: 100,
        orderings: {
          field: 'document.first_publication_date',
          direction: 'desc',
        }
      }
    )

    const result = response.results.map((item, index) => {
      const regex = /([^?.]+$)/gm //remover tudo depois do ?
      return {
        slug: item.uid,
        title: RichText.asText(item.data.title),
        body: item.data.content.find((body: any) => body.type === 'paragraph')?.text ?? '',
        imageProjects: item.data.imageprojects.url,
      }
    })
    // console.log(JSON.stringify(response, null, 2))

    return result
  }

}
