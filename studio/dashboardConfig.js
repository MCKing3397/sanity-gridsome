export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f891329e35865a936f01d15',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-studio-pvoa4949',
                  apiId: '1685c37d-29bd-4c5c-902e-9d7d0bbea9b9'
                },
                {
                  buildHookId: '5f891329604b3ca90329f7c4',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-web-e6zp3f1z',
                  apiId: '11e9c8e2-087d-405c-a35b-8c22e242c154'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MCKing3397/sanity-gridsome',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-web-e6zp3f1z.netlify.app', category: 'apps'}
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
