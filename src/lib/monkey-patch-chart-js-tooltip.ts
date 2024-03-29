declare class Chart {
  static readonly Chart: typeof Chart;
  static readonly Tooltip: any;
  static readonly helpers: any;
  static readonly defaults: any;
  static readonly plugins: any;
}

export function monkeyPatchChartJsTooltip() {
  if (typeof Chart === "undefined") {
    console.log("Chart not defined");
    return;
  }
  Chart.Tooltip.prototype.drawBody = drawBody;
  const helpers = Chart.helpers;

  function getAlignedX(vm, align) {
    return align === "center"
      ? vm.x + vm.width / 2
      : align === "right"
      ? vm.x + vm.width - vm.xPadding
      : vm.x + vm.xPadding;
  }

  function drawBody(pt, vm, ctx) {
    let bodyFontSize = vm.bodyFontSize;
    let bodySpacing = vm.bodySpacing;
    let bodyAlign = vm._bodyAlign;
    let body = vm.body;
    let drawColorBoxes = vm.displayColors;
    let labelColors = vm.labelColors;
    let xLinePadding = 0;
    let colorX = drawColorBoxes ? getAlignedX(vm, "left") : 0;
    let textColor;

    ctx.textAlign = bodyAlign;
    ctx.textBaseline = "top";
    ctx.font = helpers.fontString(
      bodyFontSize,
      vm._bodyFontStyle,
      vm._bodyFontFamily
    );

    pt.x = getAlignedX(vm, bodyAlign);

    // Before Body
    let fillLineOfText = function (line) {
      ctx.fillText(line, pt.x + xLinePadding, pt.y);
      pt.y += bodyFontSize + bodySpacing;
    };

    // Before body lines
    ctx.fillStyle = vm.bodyFontColor;
    helpers.each(vm.beforeBody, fillLineOfText);

    xLinePadding =
      drawColorBoxes && bodyAlign !== "right"
        ? bodyAlign === "center"
          ? bodyFontSize / 2 + 1
          : bodyFontSize + 2
        : 0;

    // Draw body lines now
    helpers.each(body, function (bodyItem, i) {
      textColor = vm.labelTextColors[i];
      ctx.fillStyle = textColor;
      helpers.each(bodyItem.before, fillLineOfText);

      // Draw Legend-like boxes if needed
      if (drawColorBoxes) {
        // Fill a white rect so that colours merge nicely if the opacity is < 1
        ctx.fillStyle = vm.legendColorBackground;
        ctx.fillRect(colorX, pt.y, bodyFontSize, bodyFontSize);

        // Border
        ctx.lineWidth = 1;
        ctx.strokeStyle = labelColors[i].borderColor;
        ctx.strokeRect(colorX, pt.y, bodyFontSize, bodyFontSize);

        // Inner square
        ctx.fillStyle = labelColors[i].backgroundColor;
        ctx.fillRect(colorX + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
        ctx.fillStyle = textColor;
      }

      helpers.each(bodyItem.lines, fillLineOfText);

      helpers.each(bodyItem.after, fillLineOfText);
    });

    // Reset back to 0 for after body
    xLinePadding = 0;

    // After body lines
    helpers.each(vm.afterBody, fillLineOfText);
    pt.y -= bodySpacing; // Remove last body spacing
  }
}
