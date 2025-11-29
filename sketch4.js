const sketch4 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 266);
    p.frameRate(20);
    p.colorMode(p.HSB, 360, 100, 100);
  };

  p.draw = function() {
    let t = p.frameCount * 0.04;

    p.drawSky(t);
    p.drawStars(t);
    p.drawMoon(t);
    p.drawGround();
    p.drawBuildingBody(t);
    p.drawCenterTower(t);
    p.drawSideTowers(t);

    p.drawRoseWindowAnimated(200, 115, 60 + p.sin(t * 4) * 4, t);

    p.drawDoor(180, 193, 45, 70, t);
    p.drawDoor(110, 213, 30, 45, t);
    p.drawDoor(260, 213, 30, 45, t);

    p.drawWindow(110, 166, 30, 55, 0, t);
    p.drawWindow(290, 166, 30, 55, 1, t);
    p.drawWindow(155, 160, 25, 50, 2, t);
    p.drawWindow(245, 160, 25, 50, 3, t);

    p.drawCross(200, 27 + p.sin(t * 4) * 4, 10, 25);
    p.drawCross(90, 51 + p.sin(t * 4 + 1) * 4, 7, 20);
    p.drawCross(310, 51 + p.sin(t * 4 + 2) * 4, 7, 20);
  };

  // 헬퍼 함수들을 p의 메서드로 추가
  p.drawSky = function(t) {
    let c1 = p.color(220, 80, 20);
    let c2 = p.color(240, 70, 40);

    for (let y = 0; y < p.height; y++) {
      let _p = y / p.height;
      let wobble = p.sin(t * 1.5 + y * 0.02) * 0.02;
      p.stroke(p.lerpColor(c1, c2, _p + wobble));
      p.line(0, y, p.width, y);
    }
  };

  p.drawStars = function(t) {
    p.noStroke();
    for (let i = 0; i < 150; i++) {
      let x = (i * 37) % p.width;
      let y = (i * 19) % 130;
      let tw = (p.sin(t * 10 + i) + 1) * 1.3;
      p.fill(0, 0, 100, 150 + p.sin(t * 10 + i) * 100);
      p.circle(x, y, tw);
    }
  };

  p.drawMoon = function(t) {
    p.fill(50, 20, 100);
    p.ellipse(60 + p.sin(t * 1.5) * 15, 35, 30 + p.sin(t * 3) * 4);
  };

  p.drawGround = function() {
    p.fill(0, 0, 18);
    p.rect(0, 233, p.width, 33);
  };

  p.drawBuildingBody = function(t) {
    let h = p.map(p.sin(t * 0.2), -1, 1, 200, 260);
    p.fill(p.color(h, 10 + p.sin(t * 0.5) * 5, 80 + p.sin(t * 0.3 + 1) * 5));
    p.rect(86, 133, 228, 120);
  };

  p.drawCenterTower = function(t) {
    let h = p.map(p.sin(t * 0.2 + 0.5), -1, 1, 220, 280);
    p.fill(p.color(h, 15 + p.sin(t * 0.6) * 7, 70 + p.sin(t * 0.4 + 2) * 7));
    p.rect(160, 66, 74, 67);

    p.fill(250, 80, 45);
    p.triangle(160, 66, 234, 66, 197, 27);
  };

  p.drawSideTowers = function(t) {
    let h = p.map(p.sin(t * 0.2 + 0.5), -1, 1, 220, 280);
    p.fill(p.color(h, 15 + p.sin(t * 0.6) * 7, 70 + p.sin(t * 0.4 + 2) * 7));

    p.rect(66, 100, 48, 153);
    p.rect(286, 100, 48, 153);

    p.fill(250, 80, 45);
    p.triangle(66, 100, 114, 100, 90, 51);
    p.triangle(286, 100, 334, 100, 310, 51);
  };

  p.drawDoor = function(x, y, w, h, t) {
    p.fill(p.color(10, 60 + p.sin(t * 2) * 20, 30 + p.cos(t * 1.5) * 10));
    p.rect(x, y, w, h);

    p.fill(0, 0, 10);
    p.arc(x + w / 2, y, w, w, p.PI, p.TWO_PI);
  };

  p.drawWindow = function(x, y, w, h, idx, t) {
    let palette = [40, 10, 160, 200, 260];
    let hue = palette[idx % palette.length];
    let br = 60 + (p.sin(t * 4 + idx) + 1) * 20;

    p.fill(0, 0, 13);
    p.ellipse(x, y, w, h);

    p.fill(hue, 90, br);
    p.ellipse(x, y, w * 0.6, h * 0.7);

    p.stroke(210, 20, 30);
    p.strokeWeight(2);
    p.line(x, y - h / 2, x, y + h / 2);
    p.line(x - w / 2, y, x + w / 2, y);
    p.noStroke();
  };

  p.drawRoseWindowAnimated = function(cx, cy, size, t) {
    p.push();
    p.translate(cx, cy);
    p.rotate(t * 2);

    p.fill(0, 0, 13);
    p.ellipse(0, 0, size);

    let hues = [350, 40, 160, 200, 260];
    for (let i = 0; i < 12; i++) {
      let a = (p.TWO_PI / 12) * i;
      let x = p.cos(a) * size * 0.35;
      let y = p.sin(a) * size * 0.35;
      let br = 70 + (p.sin(t * 5 + i) + 1) * 15;

      p.fill(hues[i % hues.length], 90, br);
      p.ellipse(x, y, size * 0.25);
    }

    p.fill(40, 60, 80 + (p.sin(t * 3) + 1) * 10);
    p.ellipse(0, 0, size * 0.3);

    p.noFill();
    p.stroke(0, 0, 100);
    p.strokeWeight(3);
    p.ellipse(0, 0, size);

    p.pop();
  };

  p.drawCross = function(x, y, w, h) {
    p.stroke(0, 0, 100);
    p.strokeWeight(3);
    p.line(x, y, x, y - h);
    p.line(x - w / 2, y - h / 2, x + w / 2, y - h / 2);
    p.noStroke();
  };

  p.keyPressed = function() {
    if (p.key === 's') {
      // p.saveGif('church_animation', 10); // p5.gif.js 라이브러리가 필요함
    }
  };
};

// new p5(sketch4); // HTML에서 실행 시 주석 해제