const sketch1 = function(p) {
  p.setup = function() {
    p.createCanvas(600, 400);
    p.noLoop();
  };

  p.draw = function() {
    // 배경 그라데이션
    for (let y = 0; y < p.height; y++) {
      let inter = p.map(y, 0, p.height, 0, 1);
      let c = p.lerpColor(p.color('#0b132b'), p.color('#1c2541'), inter);
      p.stroke(c);
      p.line(0, y, p.width, y);
    }

    // 별 (노이즈)
    p.noStroke();
    p.fill(255);
    for (let i = 0; i < 200; i++) {
      p.circle(p.random(p.width), p.random(p.height / 2), p.random(1, 3));
    }

    // 달
    p.fill('#f5f3ce');
    p.ellipse(80, 50, 40, 40);

    // 땅/기단
    p.fill('#2e2e2e');
    p.rect(0, 350, p.width, 50);

    // 중앙 본체
    p.fill('#d6d6d6');
    p.rect(130, 200, 340, 180);

    // 중앙 탑
    p.fill('#bdbdbd');
    p.rect(240, 100, 110, 100);
    p.fill('#444f77');
    p.triangle(240, 100, 350, 100, 295, 40);

    // 측면 탑
    p.fill('#bdbdbd');
    p.rect(100, 150, 70, 230);
    p.rect(430, 150, 70, 230);
    p.fill('#444f77');
    p.triangle(100, 150, 170, 150, 135, 75);
    p.triangle(430, 150, 500, 150, 465, 75);

    // 장미창, 문, 창문, 십자가
    p.drawRoseWindow(295, 170, 80, true);
    p.drawDoor(270, 290, 60, 90);
    p.drawDoor(170, 320, 40, 60);
    p.drawDoor(390, 320, 40, 60);
    p.drawWindow(170, 250, 40, 80, 0);
    p.drawWindow(430, 250, 40, 80, 1);
    p.drawWindow(240, 240, 30, 70, 2);
    p.drawWindow(350, 240, 30, 70, 3);
    p.drawCross(295, 40, 15, 40);
    p.drawCross(135, 75, 10, 30);
    p.drawCross(465, 75, 10, 30);
  };

  p.mousePressed = function() {
    p.saveCanvas('cathedral', 'png');
  };

  // 헬퍼 함수들을 p의 메서드로 추가
  p.drawRoseWindow = function(cx, cy, size, glowing = false) {
    p.push();
    p.translate(cx, cy);
    let colors = glowing ?
      ['#ff7675', '#ffeaa7', '#55efc4', '#74b9ff', '#a29bfe'] :
      ['#e17055', '#00cec9', '#fdcb6e', '#a29bfe', '#fab1a0'];

    p.fill('#222');
    p.ellipse(0, 0, size, size);

    let petals = 12;
    for (let i = 0; i < petals; i++) {
      let angle = p.TWO_PI / petals * i;
      let x = p.cos(angle) * size * 0.35;
      let y = p.sin(angle) * size * 0.35;
      p.fill(colors[i % colors.length]);
      p.ellipse(x, y, size * 0.25, size * 0.25);
    }

    p.fill('#ffeaa7');
    p.ellipse(0, 0, size * 0.3, size * 0.3);

    p.noFill();
    p.stroke('#f5f5f5');
    p.strokeWeight(3);
    p.ellipse(0, 0, size, size);
    p.pop();
  };

  p.drawDoor = function(x, y, w, h) {
    p.fill('#3e2723');
    p.rect(x, y, w, h);
    p.fill('#1b1412');
    p.arc(x + w / 2, y, w, w, p.PI, p.TWO_PI);
  };

  p.drawWindow = function(x, y, w, h, idx) {
    let paletteSets = ['#ffeaa7', '#fab1a0', '#55efc4', '#74b9ff', '#a29bfe'];
    let c = paletteSets[idx % paletteSets.length];

    p.fill('#222');
    p.ellipse(x, y, w, h);
    p.fill(c);
    p.ellipse(x, y, w * 0.6, h * 0.7);

    p.stroke('#2d3436');
    p.strokeWeight(2);
    p.line(x, y - h / 2, x, y + h / 2);
    p.line(x - w / 2, y, x + w / 2, y);
    p.noStroke();
  };

  p.drawCross = function(x, y, w, h) {
    p.stroke('#f5f5f5');
    p.strokeWeight(3);
    p.line(x, y, x, y - h);
    p.line(x - w / 2, y - h / 2, x + w / 2, y - h / 2);
    p.noStroke();
  };
};

// new p5(sketch1); // HTML에서 실행 시 주석 해제