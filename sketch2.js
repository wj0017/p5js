const sketch2 = function(p) {
  p.setup = function() {
    p.createCanvas(600, 400);
    p.noLoop();
  };

  p.draw = function() {
    p.background(255);

    // 몸통/머리
    p.noStroke();
    p.fill('#ffe0bd');
    p.ellipse(p.width/2, p.height/2, 160, 200);

    // 머리 상단 (털)
    p.fill('#1c1c1c');
    p.arc(p.width/2, p.height/2 - 40, 160, 140, p.PI, 0, p.CHORD);

    // 귀
    p.fill('#ffe0bd');
    p.ellipse(p.width/2 - 80, p.height/2 + 10, 22, 45);
    p.ellipse(p.width/2 + 80, p.height/2 + 10, 22, 45);

    // 눈 흰자
    p.fill(255);
    p.stroke(0);
    p.strokeWeight(2);
    p.ellipse(p.width/2 - 40, p.height/2 - 20, 50, 35);
    p.ellipse(p.width/2 + 40, p.height/2 - 20, 50, 35);

    // 눈동자
    p.fill(0);
    p.noStroke();
    p.ellipse(p.width/2 - 40, p.height/2 - 20, 18, 18);
    p.ellipse(p.width/2 + 40, p.height/2 - 20, 18, 18);
    p.fill(255);
    p.ellipse(p.width/2 - 35, p.height/2 - 25, 5, 5);
    p.ellipse(p.width/2 + 35, p.height/2 - 25, 5, 5);

    // 안경테 (윤곽선)
    p.noFill();
    p.stroke(0);
    p.strokeWeight(2.5);
    p.ellipse(p.width/2 - 40, p.height/2 - 20, 65, 45);
    p.ellipse(p.width/2 + 40, p.height/2 - 20, 65, 45);
    p.line(p.width/2 - 8, p.height/2 - 20, p.width/2 + 8, p.height/2 - 20);

    // 코
    p.stroke('#c89b7b');
    p.strokeWeight(2);
    p.line(p.width/2, p.height/2 - 5, p.width/2, p.height/2 + 15);

    // 입
    p.noStroke();
    p.fill('#d36d5e');
    p.arc(p.width/2, p.height/2 + 40, 40, 20, 0, p.PI);

    // 몸통 (옷)
    p.fill('#b3d4fc');
    p.rect(p.width/2 - 100, p.height/2 + 90, 200, 200, 50);
  };
};

// new p5(sketch2); // HTML에서 실행 시 주석 해제