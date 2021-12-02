export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a93a3335c55713014ef8ac',
                  title: 'Sanity Studio',
                  name: 'conway-cms-test-studio',
                  apiId: '91573a48-0b4d-48ab-85a2-302f74301a09'
                },
                {
                  buildHookId: '61a93a324a6894173ad02fa9',
                  title: 'Blog Website',
                  name: 'conway-cms-test',
                  apiId: 'cc406e10-c7de-4e9d-905f-b647aa054839'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Justin-Insight/conway-cms-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://conway-cms-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
