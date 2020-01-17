exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
    query {
        allDatoCmsHabitacion {
          nodes {
            slug
          }
        }
    }
    `);
    // console.log(resultado.data.allDatoCmsHabitacion.nodes);
    if (resultado.error) {
        reporter.panic('Error', resultado.error);
    }
    const habitacionesSlug = resultado.data.allDatoCmsHabitacion.nodes;
    habitacionesSlug.forEach(habitacionSlug => {
        actions.createPage({
            path: habitacionSlug.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: habitacionSlug.slug
            }
        })
    });
}