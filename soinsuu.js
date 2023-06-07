function Bunkai(){
    const input = document.getElementById("num");
    let num = Number(input.value);
    if(1 >= num)
    {
        alert("1より大きい自然数を入力してください");
        return;
    }
    let sosuu = [];
    while(1 < num)
    {
        for(let i = 2; i <= num; i++)
        {
            if( 0 == ( num % i ) )
            {
                num = num / i;
                sosuu.push(i);
                break;
            }
        }
    }
    const result = sosuu;
    document.getElementById("result").innerHTML = result;
}