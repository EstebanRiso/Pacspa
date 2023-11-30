const delay = ms => new Promise(res => setTimeout(res, ms));



async function generarPDF() {

  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });

  await delay(200)
  console.log("espere un momentito")

  var element = document.getElementById('contenido');
  const numpres=document.getElementById("NumeroPresupuesto");
  nombre_archivo='Presupuesto N°'+numpres.value

  var opt = {
    margin:       [0.5,0,0.58,0],
    filename:     `${nombre_archivo}`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  
  // New Promise-based usage:
  html2pdf().set(opt).from(element).save();
}



async function EnviarPDF() {
  
  const element = document.getElementById('contenido');
  const numpres=document.getElementById("NumeroPresupuesto");
  nombre_archivo='Presupuesto N°'+numpres.value

  var opt = {
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };
  
    html2pdf().set(opt).from(element).outputPdf().then( pdf => {
      // Convertir el PDF a base64
      console.log("llamada")
      // Dirección de correo electrónico del remitente
      const remitente = document.getElementById('correo');
      const dato=remitente.value.toString()
      console.log("el remitente es:"+dato)

      const mensaje= document.getElementById('mensaje');
      const dato2=mensaje.value.toString()
      console.log("el mensaje es:"+dato2);
    
      const numero_presupuesto=document.getElementById("NumeroPresupuesto")
      const dato3=numero_presupuesto.value.toString()

      console.log(dato3)
      const subject="Envió de Presupuesto N°"+dato3
    
      console.log("aqui esta haciendose bien las cosas?")
      console.log("alo se hizo bien?")

      // Crear el mensaje con el archivo adjunto y destinatario
      // Codificar el mensaje en base64 URL-safe
      console.log("pdfbase64")
      const pdfBase64=btoa(pdf)
  
   
      Email.send({
      SecureToken : "fd5583a3-014b-40b5-8901-62edf89774bf",
      To : dato,
      From : "info.notificaciones@pacspachile.info",
      Subject : subject,
      Body : dato2,
      Attachments : [
        {
         name : 'Prespuesto N°'+dato3+'.pdf',
         data : pdfBase64 
   
        }]
      }).then(message => alert("¡Se envió el correo!"))
    
    });

  
}



