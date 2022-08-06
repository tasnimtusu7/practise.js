var shormi = 85;
var tom = 66;
var jane = 95;
var petar = 56;
var jonh = 40;
if(a>85)
    {//if percent > 85 --A
      document.write('Grade - A');}
else if(a<=85 && a>80)
    {//80<percent80=85  --A
      document.write('Grade - A-');}
else if(a>70 && a<=80)
    {//70<percent<=80 --B
      document.write('Grade - B');}
else if(a>60 && a<=70)
    {//60<percent<=70  --C
      document.write('Grade - C');}
else if(a>40 && a<=60)
    {//40<percent<=60  --D
      document.write('Grade - D');}
else if(a<=40)
    {//percent<=40  --E
      if(a<=35)
        {//failed condition
          document.write('Grade - E Candidate failed');}
      else
        {document.write('Grade - E');}}