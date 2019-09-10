import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Nome from './componets/Nome';
import Dados from './componets/Dados';
import Skills from './componets/Skills';
import Exp from './componets/Exp';
import Idiomas from './componets/Idiomas';
import Cursos from './componets/Cursos';

import './styles.css'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Nome name='Vitor Avelar Martins' /></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Dados
            idade="24"
            telefone="35 991000347"
            endereco="Rua Calors Drumont, n°34 - Centro - Poços de Caldas - MG" /></Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}><Skills
            habilidade1="JavaScrip"
            habilidade2="GitHub"
            habilidade3="PHP"
            habilidade4="NodeJs"
            habilidade5="SQL Data Base" />
          </Paper>

        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}> <Exp funcao="Tecnico em Redes"
            descricao="Uma Rede de computadores é formada por um conjunto de máquinas eletrônicas com processadores capazes de trocar informações e compartilhar recursos, interligados por um sub-sistema de comunicação, ou seja, é quando há pelo menos dois ou mais computadores, e outros dispositivos interligados entre si de modo a poderem compartilhar recursos físicos e lógicos, estes podem ser do tipo: dados, impressoras, mensagens (e-mails), entre outros."
            data="08/09/2019"
            dataf="08/09/2019"
            empresa="Raitec AfaTec" /></Paper>
        </Grid>
        {/* <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}><Cursos curso="Analises e Desenvolvimeto de Sistemas"
            inst="Unifeob"
            horas="3000"
            descricaoCurso="O tecnólogo em Análise e Desenvolvimento de Sistemas é um profissional de nível superior que analisa, projeta, documenta, especifica, testa, implementa e cuida da manutenção de sistemas computacionais e software." /></Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}><Idiomas l1="Espanhol"
            l2="Ingles"
            l3="Mandarim"
            l4="Catalão"
            l5="Portugues" /></Paper>
        </Grid>
      </Grid>
    </div >
  );
}




// function App() {
//   return (
//     <div id="app">
//       <Nome name="Vitor Avelar Martins"

//         idade="24"
//         telefone="35 991000347"
//         endereco="Rua Calors Drumont, n°34 - Centro - Poços de Caldas - MG"

//         habilidade1="JavaScrip"
//         habilidade2="GitHub"
//         habilidade3="PHP"
//         habilidade4="NodeJs"
//         habilidade5="SQL Data Base"

//         funcao="Tecnico em Redes"
//         descricao="Uma Rede de computadores é formada por um conjunto de máquinas eletrônicas com processadores capazes de trocar informações e compartilhar recursos, interligados por um sub-sistema de comunicação, ou seja, é quando há pelo menos dois ou mais computadores, e outros dispositivos interligados entre si de modo a poderem compartilhar recursos físicos e lógicos, estes podem ser do tipo: dados, impressoras, mensagens (e-mails), entre outros."
//         data="08/09/2019"
//         dataf="08/09/2019"
//         empresa="Raitec AfaTec"

//         l1="Espanhol"
//         l2="Ingles"
//         l3="Mandarim"
//         l4="Catalão"
//         l5="Portugues"

//         curso="Analises e Desenvolvimeto de Sistemas"
//         inst="Unifeob"
//         horas="3000"
//         descricaoCurso="O tecnólogo em Análise e Desenvolvimento de Sistemas é um profissional de nível superior que analisa, projeta, documenta, especifica, testa, implementa e cuida da manutenção de sistemas computacionais e software."

//       />

//     </div>)
// }

//export default App;
