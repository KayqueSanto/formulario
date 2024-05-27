const nodemailer = require("nodemailer")

const express = require("express"),
path = require("path")

let transporter = nodemailer.createTransport({
host: "smtp-mail.outlook.com",
port: 587,
secure: false, // Use `true` for port 465, `false` for all other ports
auth: {
    user: "kayque.a.s@hotmail.com",
    pass: "",
},
service: "outlook"
})

const app = express()

app.use(express.static(path.join(__dirname)))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "html", "form.html"))
})

app.post("/", (req, res) => {
    
    const { empresa$, campoExtraEmpresaParanoa, centroCusto1, campoExtra1, campoExtra3, detalhamento1, 
        descritivo, ncm1, importado1, tipoMaterial, campoExtra4, condicao, utilizacao, 
        unidadeMedida1, email, ramal, depto } = req.body;
        
    let emailBody = `<h1>Seguem os dados da solicitação de cadastro</h1>`;
    // Adiciona os campos preenchidos ao corpo do e-mail
    if (empresa$) emailBody += `<p><b>Empresa: </b>${empresa$}</p>`;
    if (campoExtraEmpresaParanoa) emailBody += `<p><b>Unidade de Negócio: </b>${campoExtraEmpresaParanoa}</p>`;
    if (tipoMaterial) emailBody += `<p><b>Tipo do Material: </b>${tipoMaterial}</p>`;
    if (campoExtra1) emailBody += `<p><b>Tipo MC: </b>${campoExtra1}</p>`;
    if (campoExtra3) emailBody += `<p><b>Tipo GG: </b>${campoExtra3}</p>`;
    if (campoExtra4) emailBody += `<p><b>Tipo AI: </b>${campoExtra4}</p>`;
    if (utilizacao) emailBody += `<p><b>Utilizacao: </b>${utilizacao}</p>`;
    if (condicao) emailBody += `<p><b>Condicao: </b>${condicao}</p>`;
    if (centroCusto1) emailBody += `<p><b>Centro de Custo: </b>${centroCusto1}</p>`;
    if (detalhamento1) emailBody += `<p><b>Detalhamento: </b>${detalhamento1}</p>`;
    if (descritivo) emailBody += `<p><b>Descritivo do Material: </b>${descritivo}</p>`;
    if (ncm1) emailBody += `<p><b>NCM: </b>${ncm1}</p>`;
    if (importado1) emailBody += `<p><b>Importado? </b>${importado1}</p>`;
    if (unidadeMedida1) emailBody += `<p><b>Unidade de Medida: </b>${unidadeMedida1}</p>`;
    if (email) emailBody += `<p><b>Email: </b>${email}</p>`;
    if (ramal) emailBody += `<p><b>ramal: </b>${ramal}</p>`;
    if (depto) emailBody += `<p><b>Depto: </b>${depto}</p>`;
    
    // Envia o e-mail apenas com os campos preenchidos
    transporter.sendMail({
        from: '"Kayque👻" <kayque.a.s@hotmail.com>', // endereço do remetente
        to: "kayque.a.s@hotmail.com", // lista de destinatários
        subject: "Solicitação de Cadastro", // assunto do e-mail
        html: emailBody // corpo do e-mail
    }).then(() => {
        console.log("E-mail enviado com sucesso");

    }).catch((err) => {
        console.log("Erro ao enviar o e-mail:", err);
    });
    
    res.redirect("/");
});

app.post("/teste-form", (req, res) => {
    console.log("Formulários recebidos!")
    console.log(req.body)
    
    const {
        emailSolicitante, ramal, depto, formsEmpresa, formsUnidadeDeNegocio, formsTipoDeMaterial, formsMc, formsMn, formsGg, formsEscolha, formsUtilizacao,formsCondicao, formsCentroCusto, formsDetalhamento, formsDescritivo, formsNcm, formsMaterialImportado, formsUnidadeDeMedida, quantidadeForms
    } =req.body

    let controleSolicitacao = ""
    let formAtual = 1
    let email = ""
    
    email += `<h1>Solicitação</h1><h3>Email: ${emailSolicitante}</h3><h3>Ramal: ${ramal}</h3><h3>Departamento: ${depto}</h3><hr><br><br>`

    for(let i = 0; i < quantidadeForms; i++){
        controleSolicitacao += `<h1>"Solicitação de Cadastros ${formAtual}"</h1><br>`
        if (formsEmpresa[i]) controleSolicitacao += `<p><b>Empresa: </b>${formsEmpresa[i]}</p>`
        if (formsUnidadeDeNegocio[i]) controleSolicitacao += `<p><b>Unidade de Negocio: </b>${formsUnidadeDeNegocio[i]}</p>`
        if (formsTipoDeMaterial[i])controleSolicitacao += `<p><b>Tipo de Material: </b>${formsTipoDeMaterial[i]}</p>`
        if (formsMc[i])controleSolicitacao += `<p><b>Tipo MC: </b>${formsMc[i]}</p>`
        if (formsMn[i])controleSolicitacao += `<p><b>Tipo MN: </b>${formsMn[i]}</p>`
        if (formsGg[i])controleSolicitacao += `<p><b>Tipo GG: </b>${formsGg[i]}</p>`
        if (formsEscolha[i])controleSolicitacao += `<p><b>TIpo AI: </b>${formsEscolha[i]}</p>`
        if (formsUtilizacao[i])controleSolicitacao += `<p><b>Utilização: </b>${formsUtilizacao[i]}</p>`
        if (formsCondicao[i])controleSolicitacao += `<p><b>Condição: </b>${formsCondicao[i]}</p>`
        if (formsCentroCusto[i])controleSolicitacao += `<p><b>Centro de Custo: </b>${formsCentroCusto[i]}</p>`
        if (formsDetalhamento[i])controleSolicitacao += `<p><b>Detalhamento: </b>${formsDetalhamento[i]}</p>`
        if (formsDescritivo[i])controleSolicitacao += `<p><b>Descritivo: </b>${formsDescritivo[i]}</p>`
        if (formsNcm[i])controleSolicitacao += `<p><b>NCM: </b>${formsNcm[i]}</p>`
        if (formsMaterialImportado[i])controleSolicitacao += `<p><b>Material Importado: </b>${formsMaterialImportado[i]}</p>`
        if (formsUnidadeDeMedida[i])controleSolicitacao += `<p><b>Unidade de Medida: </b>${formsUnidadeDeMedida[i]}</p>\n\n`

        formAtual++

        email += controleSolicitacao

        controleSolicitacao = ""
    }
    
    // Envia o e-mail apenas com os campos preenchidos
    transporter.sendMail({
        from: '"Kayque👻" <kayque.a.s@hotmail.com>', // endereço do remetente
        to: "kayque.a.s@hotmail.com", // lista de destinatários
        subject: "Solicitação de Cadastro", // assunto do e-mail
        html: email // corpo do e-mail
    }).then(() => {
        console.log("E-mail enviado com sucesso");

    }).catch((err) => {
        console.log("Erro ao enviar o e-mail:", err);
    });

    res.json({
        msg: "requisição feita com sucesso"
    })
})

const port = 3000, 
      host = "localhost"

app.listen(port, host, () =>{
    console.log("localhost:3000/")
}) 
