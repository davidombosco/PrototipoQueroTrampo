function diffImage(img) 
{
   if(img.src.match(/blank/)) img.src = "coracaoCheio.png";
   else img.src = "coracaoVazio.png";
}