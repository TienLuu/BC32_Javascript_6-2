function showInfo(id, content) {
   document.getElementById(id).style.display = "block";
   document.getElementById(id).innerHTML = content;
}

/*  
    ASSUMING
        - End user nhập vào 1 số nguyên dương
    
    INPUT
        - Tạo biến primeNumber để nhận giá trị input có id primeNumber
        - Tạo mảng primeNumbers để nhận giá trị là các số nguyên tố
        - Tạo functon isPrimeNumber(n) để kiểm tra số nguyên tố - return 1 là số NT
    
    HANDLE
        - Kiểm tra primeNumber >= 2 ? Bước tiếp theo : Không phải là số NT
        - Sử dụng vòng lặp với giá trị khởi tạo i = 2, điều kiện chạy <= primeNumber
        - Nếu Math.sqrt(primeNumber) % i == 0 ? Không phải là số NT : Là số NT primeNumbers.push(i)
    
    OUTPUT
        - Hiển thị các giá trị của mang primeNumbers ra div có id showResult
*/
function isPrimeNumber(n) {
   let square = Math.sqrt(n);
   for (let i = 2; i <= square; i++) {
      if (n % i == 0) {
         return 0;
      }
   }
   return 1;
}

function findPrimeNumber() {
   let primeNumber = +document.getElementById("primeNumber").value;
   let primeNumbers = [];

   if (primeNumber < 2) {
      showInfo(
         "showResult",
         "<span>Số nguyên tố là số > 1. Vui lòng nhập lại!</span>"
      );
      return;
   }

   for (let i = 2; i <= primeNumber; i++) {
      if (isPrimeNumber(i) == 1) {
         primeNumbers.push(i);
      }
   }

   showInfo("showResult", primeNumbers.join(" "));
}
