document.getElementById("pedidoForm").addEventListener("submit", (e) => {
    e.preventDefault()

    let email = document.getElementById("email").value
    let ramal = document.getElementById("ramal").value
    let depto = document.getElementById("depto").value


    let quantidadeForms = document.getElementById("quantidade").value

    let classEmpresa = document.getElementsByClassName("empresa")
    let classUnidadeDeNegocio = document.getElementsByClassName("unidadeDeNegocio")
    let classTipoDeMaterial = document.getElementsByClassName("tipoDeMaterial")
    let classMc = document.getElementsByClassName("mc")
    let classMn = document.getElementsByClassName("mn")
    let classGg = document.getElementsByClassName("gg")
    let classEscolha = document.getElementsByClassName("escolha")
    let classUtilizacao = document.getElementsByClassName("utilizacao")
    let classCondicao = document.getElementsByClassName("condicao")
    let classCentroCentro = document.getElementsByClassName("centroCusto")
    let classDetalhamento = document.getElementsByClassName("detalhamento")
    let classDescritivo = document.getElementsByClassName("descritivo")
    let classNcm = document.getElementsByClassName("ncm")
    let classMaterialImportado = document.getElementsByClassName("materialImportado")
    let classUnidadeDeMedida = document.getElementsByClassName("unidadeDeMedida")

    let arrayFormEmpresa = []
    let arrayFormUnidadeDeNegocio = []
    let arrayFormTipoDeMaterial = []
    let arrayFormMc = []
    let arrayFormMn = []
    let arrayFormGg = []
    let arrayFormEscolha = []
    let arrayFormUtilizacao = []
    let arrayFormCondicao = []
    let arrayFormCentroCusto = []
    let arrayFormDetalhamento = []
    let arrayFormDescritivo = []
    let arrayFormNcm = []
    let arrayFormMaterialImportado = []
    let arrayFormUnidadeDeMedida = []

    for (let i = 0; i < quantidadeForms; i++) {
        arrayFormEmpresa.push(classEmpresa[i].value)
        arrayFormUnidadeDeNegocio.push(classUnidadeDeNegocio[i].value)
        arrayFormTipoDeMaterial.push(classTipoDeMaterial[i].value)
        arrayFormMc.push(classMc[i].value)
        arrayFormMn.push(classMn[i].value)
        arrayFormGg.push(classGg[i].value)
        arrayFormEscolha.push(classEscolha[i].value)
        arrayFormUtilizacao.push(classUtilizacao[i].value)
        arrayFormCondicao.push(classCondicao[i].value)
        arrayFormCentroCusto.push(classCentroCentro[i].value)
        arrayFormDetalhamento.push(classDetalhamento[i].value)
        arrayFormDescritivo.push(classDescritivo[i].value)
        arrayFormNcm.push(classNcm[i].value)
        arrayFormMaterialImportado.push(classMaterialImportado[i].value)
        arrayFormUnidadeDeMedida.push(classUnidadeDeMedida[i].value)
    }

    const dadosForm = {
        emailSolicitante: email,
        ramal: ramal,
        depto: depto,
        formsEmpresa: arrayFormEmpresa,
        formsUnidadeDeNegocio: arrayFormUnidadeDeNegocio,
        formsTipoDeMaterial: arrayFormTipoDeMaterial,
        formsMc: arrayFormMc,
        formsMn: arrayFormMn,
        formsGg: arrayFormGg,
        formsEscolha: arrayFormEscolha,
        formsUtilizacao: arrayFormUtilizacao,
        formsCondicao: arrayFormCondicao,
        formsCentroCusto: arrayFormCentroCusto,
        formsDetalhamento: arrayFormDetalhamento,
        formsDescritivo: arrayFormDescritivo,
        formsNcm: arrayFormNcm,
        formsMaterialImportado: arrayFormMaterialImportado,
        formsUnidadeDeMedida: arrayFormUnidadeDeMedida,
        quantidadeForms: quantidadeForms
    }

    fetch("http://localhost:3000/teste-form", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(dadosForm)
    })
    .then((response) => response.json())
    .then((data) => {
        location.reload()
    }).catch((err) => {
        console.log(err)
    })

    console.log(arrayFormEmpresa)
})