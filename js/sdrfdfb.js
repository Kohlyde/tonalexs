const formulasWithIds = [{

    id: "formula-101-1001",  //<-------- add value here increment Formula-10X-100x
    name: "", //<-------- add value here name of formula
    title: "", //<-------- add value here titkle of formula
    subtitle: "", //<-------- add value here titkle of formula
    ExplainitoryParagraph: "", //<-------- add value here titkle of formula
    DateofDiscovery: "", //<-------- add value here titkle of formula
    AuthorName:"", //<-------- add value here titkle of formula
    AuthorShortBio: "", //<-------- add value here titkle of formula
    StepsToCalculate: ""
    formula: "f = f_0 \\cdot 2^{\\frac{n}{12}}" //<-------- add value here name of formula
}, {
    id: "formula223",
    formula: "X_k23 =23 \\sum_{n=0}^{N-1}23 x_n23 \\cdot23 e^{-i \\frac{2\\pi}{N} k n}"
, {
    id: "formula323",
    formula: "C = A + B"
}, {
    id: "formula423",
    formula: "A_4 = 440 \\text{ Hz}"
}, {
    id: "formula523",
    formula: "f_n = f_0 \\cdot 2^{n/12}"
}, {
    id: "formula623",
    formula: "P5 = 7 \\text{ semitones}"
}, {
    id: "formula723",
    formula: "M3 = 4 \\text{ semitones}"
}, {
    id: "formula823",
    formula: "m3 = 3 \\text{ semitones}"
}, {
    id: "formula923",
    formula: "d3 = 2 \\text{ semitones}"
}, {
    id: "formula1023",
    formula: "M7 = 11 \\text{ semitones}"
}, {
    id: "formula1123",
    formula: "m7 = 10 \\text{ semitones}"
}, {
    id: "formula1223",
    formula: "I = \\{ 1, 3, 5 \\}"
}, {
    id: "formula1323",
    formula: "ii = \\{ 2, 4, 6 \\}"
}, {
    id: "formula1423",
    formula: "IV = \\{ 4, 6, 8 \\}"
}, {
    id: "formula1523",
    formula: "V = \\{ 5, 7, 9 \\}"
}, {
    id: "formula1623",
    formula: "T = \\sum_{n=0}^{N-1} \\left| x_n \\right|^2"
}, {
    id: "formula1723",
    formula: "R = \\int_{0}^{T} x(t) \\cdot y(t) \, dt"
}, {
    id: "formula1823",
    formula: "A = \\frac{1}{2} m v^2"
}, {
    id: "formula1923",
    formula: "Q = m c \\Delta T"
}, {
    id: "formula2023",
    formula: "f(t) = A \\sin(2 \\pi f t + \\phi)"
}, {
    id: "formula2123",
    formula: "F(s) = \\mathcal{L} \\{ f(t) \\}"
}, {
    id: "formula2223",
    formula: "L^{-1}\\{ F(s) \\} = f(t)"
}, {
    id: "formula2323",
    formula: "X(w) = \\int_{-\\infty}^{\\infty} x(t) e^{-i w t} dt"
}, {
    id: "formula2423",
    formula: "X(w) = \\sum_{n=-\\infty}^{\\infty} x[n] e^{-i w n}"
}, {
    id: "formula2523",
    formula: "x(t) = \\sum_{n=-\\infty}^{\\infty} X[k] e^{i \\frac{2\\pi}{N} k n}"
}, {
    id: "formula2623",
    formula: "Y(f) = \\mathcal{F} \\{ x(t) \\}"
}, {
    id: "formula2723",
    formula: "S = \\int_{-\\infty}^{\\infty} |X(f)|^2 df"
}, {
    id: "formula2823",
    formula: "BPM = 60 \\cdot \\frac{1}{T}"
}, {
    id: "formula2923",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, {
    id: "formula3023",
    formula: "f_{harmonic} = n \\cdot f_0"
}, {
    id: "formula3123",
    formula: "f_{fundamental} = f_0"
}, {
    id: "formula3223",
    formula: "N = \\frac{c}{f_{sound}}"
}, {
    id: "formula3323",
    formula: "d = v \\cdot t"
}, {
    id: "formula3423",
    formula: "v = \\sqrt{\\frac{E}{\\rho}}"
}, {
    id: "formula3523",
    formula: "p(t) = A \\sin(\\omega t + \\phi)"
}, {
    id: "formula3623",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula3723",
    formula: "f = \\frac{1}{T}"
}]; {
    id: "formula382323",
    formula: "f = f_0 \\cdot 2^{n/12}"
}, {
    id: "formula392323",
    formula: "x(t) = A \\cos(2 \\pi f t + \\phi)"
}, {
    id: "formula402323",
    formula: "dB = 10 \\log_{10} \\left( \\frac{P}{P_0} \\right)"
}, {
    id: "formula412323",
    formula: "A = \\frac{1}{2} L m v^2"
}, {
    id: "formula422323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula432323",
    formula: "C = \\sum_{n=0}^{N-1} x_n"
}, {
    id: "formula442323",
    formula: "T = \\frac{2 L}{v}"
}, {
    id: "formula452323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula462323",
    formula: "P = A \\cdot \\omega"
}, {
    id: "formula472323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula482323",
    formula: "F = -kx"
}, {
    id: "formula492323",
    formula: "f = f_0 \\cdot 2^{n/12}"
}, {
    id: "formula502323",
    formula: "\\Delta f = \\frac{1}{T}"
}, {
    id: "formula512323",
    formula: "I = \\int_{0}^{T} |x(t)|^2 dt"
}, {
    id: "formula522323",
    formula: "T = \\frac{1}{f_0}"
}, {
    id: "formula532323",
    formula: "f_{max} = 2 f_{fundamental}"
}, {
    id: "formula542323",
    formula: "p = \\frac{F}{A}"
}, {
    id: "formula552323",
    formula: "\\lambda = \\frac{c}{f}"
}, {
    id: "formula562323",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, {
    id: "formula572323",
    formula: "T = \\frac{2L}{g}"
}, {
    id: "formula582323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula592323",
    formula: "v = \\lambda f"
}, {
    id: "formula602323",
    formula: "Q = \\frac{v}{\\rho}"
}, {
    id: "formula612323",
    formula: "f_{max} = \\frac{v}{2L}"
}, {
    id: "formula622323",
    formula: "v = \\sqrt{\\frac{T}{\\mu}}"
}, {
    id: "formula632323",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, {
    id: "formula642323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula652323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula662323",
    formula: "x(t) = A \\sin(\\omega t + \\phi)"
}, {
    id: "formula672323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula682323",
    formula: "X = \\frac{V}{I}"
}, {
    id: "formula692323",
    formula: "R = \\frac{\\rho L}{A}"
}, {
    id: "formula702323",
    formula: "f_{max} = \\frac{v}{2L}"
}, {
    id: "formula712323",
    formula: "v = \\sqrt{\\frac{E}{\\rho}}"
}, {
    id: "formula722323",
    formula: "F = \\frac{1}{2} k x^2"
}, {
    id: "formula732323",
    formula: "f(t) = \\int_{0}^{\\infty} X(w) e^{i w t} dw"
}, {
    id: "formula742323",
    formula: "x(t) = \\sum_{n=-\\infty}^{\\infty} X[k] e^{i \\frac{2\\pi}{N} k n}"
}, {
    id: "formula752323",
    formula: "X(w) = \\int_{-\\infty}^{\\infty} x(t) e^{-i w t} dt"
}]; {
    id: "formula762323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula772323",
    formula: "v = v_0 + at"
}, {
    id: "formula782323",
    formula: "v = \\sqrt{g L}"
}, {
    id: "formula792323",
    formula: "f = \\frac{1}{2 \\pi} \\sqrt{\\frac{k}{m}}"
}, {
    id: "formula802323",
    formula: "I = m r^2"
}, {
    id: "formula812323",
    formula: "F = \\mu N"
}, {
    id: "formula822323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula832323",
    formula: "P = \\frac{F}{A}"
}, {
    id: "formula842323",
    formula: "f_n = n f_1"
}, {
    id: "formula852323",
    formula: "f(t) = A e^{i \\omega t}"
}, {
    id: "formula862323",
    formula: "F_{spring} = -k x"
}, {
    id: "formula872323",
    formula: "v = \\frac{2 d}{t}"
}, {
    id: "formula882323",
    formula: "A = \\pi r^2"
}, {
    id: "formula892323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula902323",
    formula: "I = \\int_0^T x(t) dt"
}, {
    id: "formula912323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula922323",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, {
    id: "formula932323",
    formula: "P = V^2 / R"
}, {
    id: "formula942323",
    formula: "E_{cap} = \\frac{1}{2} C V^2"
}, {
    id: "formula952323",
    formula: "P = \\frac{1}{2} m v^2"
}, {
    id: "formula962323",
    formula: "f_{res} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, {
    id: "formula972323",
    formula: "F = \\mu m g"
}, {
    id: "formula982323",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, {
    id: "formula992323",
    formula: "v = \\lambda f"
}, {
    id: "formula1002323",
    formula: "R = \\frac{\\rho L}{A}"
}, {
    id: "formula1012323",
    formula: "V = I R"
}, {
    id: "formula1022323",
    formula: "P = I V"
}, {
    id: "formula1032323",
    formula: "A_{circ} = \\pi r^2"
}, {
    id: "formula1042323",
    formula: "C = 2 \\pi r"
}, {
    id: "formula1052323",
    formula: "v_{max} = A \\omega"
}, {
    id: "formula1062323",
    formula: "a_{max} = A \\omega^2"
}, {
    id: "formula1072323",
    formula: "T = \\frac{2\\pi}{\\omega}"
}, {
    id: "formula1082323",
    formula: "I = \\frac{1}{2} m r^2"
}, {
    id: "formula1092323",
    formula: "P_{max} = \\frac{1}{2} \\rho A v^3"
}, {
    id: "formula1102323",
    formula: "f = \\frac{1}{2 L} \\sqrt{T / \\mu}"
}, {
    id: "formula1112323",
    formula: "I = I_0 e^{-\\alpha x}"
}, {
    id: "formula1122323",
    formula: "f_n = \\frac{n}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula1132323",
    formula: "v = \\frac{dx}{dt}"
}, {
    id: "formula1142323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula1152323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula1162323",
    formula: "v_{max} = A \\omega"
}, {
    id: "formula1172323",
    formula: "a = -\\omega^2 x"
}, {
    id: "formula1182323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula1192323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, {
    id: "formula1202323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula1212323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula1222323",
    formula: "f_0 = \\frac{1}{2 \\pi} \\sqrt{\\frac{k}{m}}"
}, {
    id: "formula1232323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula1242323",
    formula: "X(w) = \\int_{-\\infty}^{\\infty} x(t) e^{-i w t} dt"
}]; {
    id: "formula1252323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula1262323",
    formula: "v = \\sqrt{g L}"
}, {
    id: "formula1272323",
    formula: "f = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}"
}, {
    id: "formula1282323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula1292323",
    formula: "f = \\frac{v}{2L}"
}, {
    id: "formula1302323",
    formula: "P = \\frac{1}{2} m v^2"
}, {
    id: "formula1312323",
    formula: "A = \\pi r^2"
}, {
    id: "formula1322323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula1332323",
    formula: "v = \\lambda f"
}, {
    id: "formula1342323",
    formula: "I = m r^2"
}, {
    id: "formula1352323",
    formula: "F = -kx"
}, {
    id: "formula1362323",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, {
    id: "formula1372323",
    formula: "a = \\frac{F}{m}"
}, {
    id: "formula1382323",
    formula: "P = Fv"
}, {
    id: "formula1392323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula1402323",
    formula: "x(t) = A e^{i \\omega t}"
}, {
    id: "formula1412323",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, {
    id: "formula1422323",
    formula: "v_{max} = A \\omega"
}, {
    id: "formula1432323",
    formula: "a_{max} = A \\omega^2"
}, {
    id: "formula1442323",
    formula: "f_n = n f_1"
}, {
    id: "formula1452323",
    formula: "v = \\frac{dx}{dt}"
}, {
    id: "formula1462323",
    formula: "F_{spring} = -kx"
}, {
    id: "formula1472323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula1482323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula1492323",
    formula: "v = \\sqrt{gL}"
}, {
    id: "formula1502323",
    formula: "P = V I"
}, {
    id: "formula1512323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula1522323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula1532323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula1542323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula1552323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula1562323",
    formula: "I = \\int_0^T x(t) dt"
}, {
    id: "formula1572323",
    formula: "F = \\mu m g"
}, {
    id: "formula1582323",
    formula: "f = \\frac{1}{2 L} \\sqrt{T / \\mu}"
}, {
    id: "formula1592323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula1602323",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, {
    id: "formula1612323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula1622323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula1632323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, {
    id: "formula1642323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula1652323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula1662323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula1672323",
    formula: "v = v_0 + at"
}, {
    id: "formula1682323",
    formula: "A = \\pi r^2"
}, {
    id: "formula1692323",
    formula: "f_n = n f_1"
}, {
    id: "formula1702323",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, {
    id: "formula1712323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula1722323",
    formula: "I = m r^2"
}, {
    id: "formula1732323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula1742323",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, {
    id: "formula1752323",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, {
    id: "formula1762323",
    formula: "X = \\frac{V}{I}"
}, {
    id: "formula1772323",
    formula: "P = F v"
}, {
    id: "formula1782323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula1792323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula1802323",
    formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula1812323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula1822323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula1832323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula1842323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula1852323",
    formula: "v = \\frac{dx}{dt}"
}, {
    id: "formula1862323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula1872323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula1882323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, {
    id: "formula1892323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula1902323",
    formula: "v_{max} = A \\omega"
}, {
    id: "formula1912323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula1922323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula1932323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula1942323",
    formula: "f_n = n f_1"
}, {
    id: "formula1952323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula1962323",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, {
    id: "formula1972323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula1982323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula1992323",
    formula: "E = \\frac{1}{2} C V^2"
}]; {
    id: "formula2002323",
    formula: "I = m r^2"
}, {
    id: "formula2012323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula2022323",
    formula: "v = \\lambda f"
}, {
    id: "formula2032323",
    formula: "F = -kx"
}, {
    id: "formula2042323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula2052323",
    formula: "f_{max} = 2f_0"
}, {
    id: "formula2062323",
    formula: "v = \\sqrt{gL}"
}, {
    id: "formula2072323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula2082323",
    formula: "E = \\frac{1}{2} mv^2"
}, {
    id: "formula2092323",
    formula: "A = \\pi r^2"
}, {
    id: "formula2102323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula2112323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula2122323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula2132323",
    formula: "P = F v"
}, {
    id: "formula2142323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula2152323",
    formula: "x(t) = A \\sin(\\omega t + \\phi)"
}, {
    id: "formula2162323",
    formula: "a = - \\omega^2 x"
}, {
    id: "formula2172323",
    formula: "f_n = n f_1"
}, {
    id: "formula2182323",
    formula: "v = \\lambda f"
}, {
    id: "formula2192323",
    formula: "I = m r^2"
}, {
    id: "formula2202323",
    formula: "F = -kx"
}, {
    id: "formula2212323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula2222323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula2232323",
    formula: "P = \\frac{1}{2} m v^2"
}, {
    id: "formula2242323",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, {
    id: "formula2252323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula2262323",
    formula: "A = \\pi r^2"
}, {
    id: "formula2272323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula2282323",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, {
    id: "formula2292323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula2302323",
    formula: "I = m r^2"
}, {
    id: "formula2312323",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, {
    id: "formula2322323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, {
    id: "formula2332323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula2342323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula2352323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula2362323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula2372323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula2382323",
    formula: "v_{max} = A \\omega"
}, {
    id: "formula2392323",
    formula: "P = F v"
}, {
    id: "formula2402323",
    formula: "v = \\lambda f"
}, {
    id: "formula2412323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula2422323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula2432323",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, {
    id: "formula2442323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula2452323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula2462323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula2472323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula2482323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula2492323",
    formula: "f_n = n f_1"
}, {
    id: "formula2502323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula2512323",
    formula: "P = V I"
}, {
    id: "formula2522323",
    formula: "f_{fundamental} = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula2532323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula2542323",
    formula: "v = \\sqrt{g L}"
}, {
    id: "formula2552323",
    formula: "P = \\frac{1}{2} m v^2"
}, {
    id: "formula2562323",
    formula: "f_n = n f_1"
}, {
    id: "formula2572323",
    formula: "v_{max} = A \\omega"
}, {
    id: "formula2582323",
    formula: "a = - \\omega^2 x"
}, {
    id: "formula2592323",
    formula: "v = \\frac{dx}{dt}"
}, {
    id: "formula2602323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula2612323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula2622323",
    formula: "a = - \\omega^2 x"
}, {
    id: "formula2632323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula2642323",
    formula: "P = F v"
}, {
    id: "formula2652323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula2662323",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, {
    id: "formula2672323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula2682323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula2692323",
    formula: "v = \\lambda f"
}, {
    id: "formula2702323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}]; {
    id: "formula2712323",
    formula: "f_{harmonic} = n f_1"
}, {
    id: "formula2722323",
    formula: "v = \\sqrt{gL}"
}, {
    id: "formula2732323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula2742323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula2752323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula2762323",
    formula: "v = \\lambda f"
}, {
    id: "formula2772323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula2782323",
    formula: "v_{max} = A \\omega"
}, {
    id: "formula2792323",
    formula: "I = m r^2"
}, {
    id: "formula2802323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula2812323",
    formula: "f_n = n f_1"
}, {
    id: "formula2822323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula2832323",
    formula: "A = \\pi r^2"
}, {
    id: "formula2842323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula2852323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula2862323",
    formula: "P = \\frac{1}{2} m v^2"
}, {
    id: "formula2872323",
    formula: "a = - \\omega^2 x"
}, {
    id: "formula2882323",
    formula: "v = \\frac{dx}{dt}"
}, {
    id: "formula2892323",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, {
    id: "formula2902323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula2912323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula2922323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula2932323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula2942323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula2952323",
    formula: "P = F v"
}, {
    id: "formula2962323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula2972323",
    formula: "f_n = n f_1"
}, {
    id: "formula2982323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula2992323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula3002323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3012323",
    formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula3022323",
    formula: "P = V I"
}, {
    id: "formula3032323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula3042323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula3052323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula3062323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula3072323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3082323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula3092323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula3102323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, {
    id: "formula3112323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula3122323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula3132323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula3142323",
    formula: "v = \\lambda f"
}, {
    id: "formula3152323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula3162323",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, {
    id: "formula3172323",
    formula: "P = V I"
}, {
    id: "formula3182323",
    formula: "f_n = n f_1"
}, {
    id: "formula3192323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula3202323",
    formula: "P = F v"
}, {
    id: "formula3212323",
    formula: "v = \\sqrt{g L}"
}, {
    id: "formula3222323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3232323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula3242323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3252323",
    formula: "f_n = n f_1"
}, {
    id: "formula3262323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula3272323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula3282323",
    formula: "P = \\frac{1}{2} m v^2"
}, {
    id: "formula3292323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula3302323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula3312323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula3322323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula3332323",
    formula: "I = m r^2"
}, {
    id: "formula3342323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula3352323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3362323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula3372323",
    formula: "v = \\lambda f"
}, {
    id: "formula3382323",
    formula: "P = F v"
}, {
    id: "formula3392323",
    formula: "f_n = n f_1"
}, {
    id: "formula3402323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}]; {
    id: "formula3412323",
    formula: "v_{max} = A \\omega"
}, {
    id: "formula3422323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula3432323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3442323",
    formula: "f_n = n f_1"
}, {
    id: "formula3452323",
    formula: "v = \\lambda f"
}, {
    id: "formula3462323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula3472323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula3482323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula3492323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3502323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula3512323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula3522323",
    formula: "f_{fundamental} = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula3532323",
    formula: "f_n = n f_1"
}, {
    id: "formula3542323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula3552323",
    formula: "P = V I"
}, {
    id: "formula3562323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3572323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula3582323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula3592323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, {
    id: "formula3602323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula3612323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula3622323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula3632323",
    formula: "f_n = n f_1"
}, {
    id: "formula3642323",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, {
    id: "formula3652323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3662323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula3672323",
    formula: "v = \\sqrt{g L}"
}, {
    id: "formula3682323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula3692323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula3702323",
    formula: "v_{max} = A \\omega"
}, {
    id: "formula3712323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula3722323",
    formula: "a = - \\omega^2 x"
}, {
    id: "formula3732323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3742323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula3752323",
    formula: "f_n = n f_1"
}, {
    id: "formula3762323",
    formula: "P = F v"
}, {
    id: "formula3772323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula3782323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula3792323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3802323",
    formula: "f_n = n f_1"
}, {
    id: "formula3812323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula3822323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula3832323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula3842323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula3852323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3862323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula3872323",
    formula: "f_n = n f_1"
}, {
    id: "formula3882323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula3892323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula3902323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula3912323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula3922323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula3932323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula3942323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula3952323",
    formula: "f_n = n f_1"
}, {
    id: "formula3962323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula3972323",
    formula: "P = F v"
}, {
    id: "formula3982323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula3992323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula4002323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}]; {
    id: "formula4012323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula4022323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4032323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula4042323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula4052323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula4062323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula4072323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4082323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, {
    id: "formula4092323",
    formula: "f_n = n f_1"
}, {
    id: "formula4102323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula4112323",
    formula: "P = F v"
}, {
    id: "formula4122323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4132323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula4142323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula4152323",
    formula: "f_n = n f_1"
}, {
    id: "formula4162323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula4172323",
    formula: "v = \\sqrt{g L}"
}, {
    id: "formula4182323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula4192323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4202323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4212323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula4222323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula4232323",
    formula: "P = V I"
}, {
    id: "formula4242323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula4252323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula4262323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula4272323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4282323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula4292323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula4302323",
    formula: "f_n = n f_1"
}, {
    id: "formula4312323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4322323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula4332323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula4342323",
    formula: "v_{max} = A \\omega"
}, {
    id: "formula4352323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula4362323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula4372323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4382323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4392323",
    formula: "f_n = n f_1"
}, {
    id: "formula4402323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula4412323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula4422323",
    formula: "P = F v"
}, {
    id: "formula4432323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4442323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula4452323",
    formula: "f_n = n f_1"
}, {
    id: "formula4462323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula4472323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4482323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula4492323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4502323",
    formula: "E = \\frac{1}{2} C V^2"
}]; {
    id: "formula4962323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula4972323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4982323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula4992323",
    formula: "f_n = n f_1"
}, {
    id: "formula5002323",
    formula: "P = F v"
}, {
    id: "formula5012323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5022323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula5032323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5042323",
    formula: "f_n = n f_1"
}, {
    id: "formula5052323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula5062323",
    formula: "P = F v"
}, {
    id: "formula5072323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5082323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula5092323",
    formula: "f_n = n f_1"
}, {
    id: "formula5102323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula5112323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula5122323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula5132323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5142323",
    formula: "v_{max} = A \\omega"
}, {
    id: "formula5152323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula5162323",
    formula: "f_n = n f_1"
}, {
    id: "formula5172323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula5182323",
    formula: "P = F v"
}, {
    id: "formula5192323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula5202323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5212323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula5222323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5232323",
    formula: "f_n = n f_1"
}, {
    id: "formula5242323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5252323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula5262323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula5272323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula5282323",
    formula: "P = F v"
}, {
    id: "formula5292323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula5302323",
    formula: "f_n = n f_1"
}, {
    id: "formula5312323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula5322323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5332323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula5342323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula5352323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula5362323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5372323",
    formula: "P = F v"
}, {
    id: "formula5382323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5392323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula5402323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula5412323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula5422323",
    formula: "P = V I"
}, {
    id: "formula5432323",
    formula: "f_n = n f_1"
}, {
    id: "formula5442323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula5452323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula5462323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5472323",
    formula: "f_n = n f_1"
}, {
    id: "formula5482323",
    formula: "P = F v"
}, {
    id: "formula5492323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula5502323",
    formula: "P = \\frac{V^2}{R}"
}]; {
    id: "formula5512323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula5522323",
    formula: "P = V I"
}, {
    id: "formula5532323",
    formula: "f_n = n f_1"
}, {
    id: "formula5542323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula5552323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5562323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5572323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula5582323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula5592323",
    formula: "f_{beat} = |f_1 - f_2|"
}, {
    id: "formula5602323",
    formula: "f_n = n f_1"
}, {
    id: "formula5612323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula5622323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula5632323",
    formula: "P = F v"
}, {
    id: "formula5642323",
    formula: "f_n = n f_1"
}, {
    id: "formula5652323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5662323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5672323",
    formula: "v = \\lambda f"
}, {
    id: "formula5682323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5692323",
    formula: "f_n = n f_1"
}, {
    id: "formula5702323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula5712323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5722323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula5732323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula5742323",
    formula: "P = F v"
}, {
    id: "formula5752323",
    formula: "f_n = n f_1"
}, {
    id: "formula5762323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula5772323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5782323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula5792323",
    formula: "f_n = n f_1"
}, {
    id: "formula5802323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5812323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula5822323",
    formula: "P = V I"
}, {
    id: "formula5832323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula5842323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5852323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula5862323",
    formula: "f_n = n f_1"
}, {
    id: "formula5872323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5882323",
    formula: "P = F v"
}, {
    id: "formula5892323",
    formula: "f_n = n f_1"
}, {
    id: "formula5902323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula5912323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5922323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula5932323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5942323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula5952323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5962323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula5972323",
    formula: "f_n = n f_1"
}, {
    id: "formula5982323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula5992323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula6002323",
    formula: "P = F v"
}]; {
    id: "formula6012323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula6022323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula6032323",
    formula: "f_n = n f_1"
}, {
    id: "formula6042323",
    formula: "P = F v"
}, {
    id: "formula6052323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula6062323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula6072323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula6082323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula6092323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula6102323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula6112323",
    formula: "f_n = n f_1"
}, {
    id: "formula6122323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula6132323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula6142323",
    formula: "P = V I"
}, {
    id: "formula6152323",
    formula: "f_n = n f_1"
}, {
    id: "formula6162323",
    formula: "P = F v"
}, {
    id: "formula6172323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula6182323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula6192323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula6202323",
    formula: "f_n = n f_1"
}, {
    id: "formula6212323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula6222323",
    formula: "P = \\frac{I^2 R}{L}"
}, {
    id: "formula6232323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula6242323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula6252323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula6262323",
    formula: "f_n = n f_1"
}, {
    id: "formula6272323",
    formula: "P = F v"
}, {
    id: "formula6282323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula6292323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula6302323",
    formula: "f_n = n f_1"
}, {
    id: "formula6312323",
    formula: "P = V I"
}, {
    id: "formula6322323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula6332323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula6342323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula6352323",
    formula: "f_n = n f_1"
}, {
    id: "formula6362323",
    formula: "P = F v"
}, {
    id: "formula6372323",
    formula: "T = \\frac{1}{f}"
}, {
    id: "formula6382323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula6392323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula6402323",
    formula: "P = F v"
}, {
    id: "formula6412323",
    formula: "f_n = n f_1"
}, {
    id: "formula6422323",
    formula: "T = \\frac{2L}{v}"
}, {
    id: "formula6432323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula6442323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula6452323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula6462323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, {
    id: "formula6472323",
    formula: "f_n = n f_1"
}, {
    id: "formula6482323",
    formula: "f = \\frac{v}{\\lambda}"
}, {
    id: "formula6492323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula6502323",
    formula: "P = F v"
}]; {
    id: "formula5512323",
    formula: "P = F v"
}, {
    id: "formula5522323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula5532323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula5542323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5552323",
    formula: "f_n = n f_1"
}, {
    id: "formula5562323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula5572323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula5582323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5592323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula5602323",
    formula: "P = F v"
}, {
    id: "formula5612323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula5622323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula5632323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5642323",
    formula: "f_n = n f_1"
}, {
    id: "formula5652323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5662323",
    formula: "P = F v"
}, {
    id: "formula5672323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula5682323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula5692323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula5702323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5712323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula5722323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5732323",
    formula: "P = F v"
}, {
    id: "formula5742323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula5752323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula5762323",
    formula: "f_n = n f_1"
}, {
    id: "formula5772323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5782323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5792323",
    formula: "P = F v"
}, {
    id: "formula5802323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula5812323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula5822323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula5832323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5842323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula5852323",
    formula: "P = F v"
}, {
    id: "formula5862323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula5872323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula5882323",
    formula: "P = F v"
}, {
    id: "formula5892323",
    formula: "f_n = n f_1"
}, {
    id: "formula5902323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula5912323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula5922323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5932323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula5942323",
    formula: "P = F v"
}, {
    id: "formula5952323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula5962323",
    formula: "f_n = n f_1"
}, {
    id: "formula5972323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula5982323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5992323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula6002323",
    formula: "f = \\frac{1}{T}"
}]; {
    id: "formula5012323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula5022323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5032323",
    formula: "P = F v"
}, {
    id: "formula5042323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula5052323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula5062323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5072323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula5082323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula5092323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5102323",
    formula: "v = \\sqrt{gL}"
}, {
    id: "formula5112323",
    formula: "f_n = n f_1"
}, {
    id: "formula5122323",
    formula: "P = F v"
}, {
    id: "formula5132323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula5142323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula5152323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5162323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula5172323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula5182323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5192323",
    formula: "P = F v"
}, {
    id: "formula5202323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula5212323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula5222323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula5232323",
    formula: "f_n = n f_1"
}, {
    id: "formula5242323",
    formula: "P = F v"
}, {
    id: "formula5252323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula5262323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5272323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5282323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula5292323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula5302323",
    formula: "P = F v"
}, {
    id: "formula5312323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula5322323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula5332323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula5342323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula5352323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5362323",
    formula: "P = F v"
}, {
    id: "formula5372323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula5382323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5392323",
    formula: "f_n = n f_1"
}, {
    id: "formula5402323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula5412323",
    formula: "P = F v"
}, {
    id: "formula5422323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula5432323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula5442323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5452323",
    formula: "f_n = n f_1"
}, {
    id: "formula5462323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula5472323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula5482323",
    formula: "P = F v"
}, {
    id: "formula5492323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula5502323",
    formula: "I = \\frac{V}{R}"
}]; {
    id: "formula4512323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula4522323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4532323",
    formula: "P = F v"
}, {
    id: "formula4542323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula4552323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula4562323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula4572323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4582323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula4592323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula4602323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula4612323",
    formula: "v = \\sqrt{gL}"
}, {
    id: "formula4622323",
    formula: "f_n = n f_1"
}, {
    id: "formula4632323",
    formula: "P = F v"
}, {
    id: "formula4642323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula4652323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula4662323",
    formula: "P = F v"
}, {
    id: "formula4672323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula4682323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4692323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4702323",
    formula: "f_n = n f_1"
}, {
    id: "formula4712323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula4722323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula4732323",
    formula: "P = F v"
}, {
    id: "formula4742323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula4752323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula4762323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4772323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4782323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula4792323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula4802323",
    formula: "P = F v"
}, {
    id: "formula4812323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula4822323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4832323",
    formula: "f_n = n f_1"
}, {
    id: "formula4842323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula4852323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula4862323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula4872323",
    formula: "P = F v"
}, {
    id: "formula4882323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula4892323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4902323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4912323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula4922323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula4932323",
    formula: "P = F v"
}, {
    id: "formula4942323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula4952323",
    formula: "P = F v"
}, {
    id: "formula4962323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula4972323",
    formula: "f_n = n f_1"
}, {
    id: "formula4982323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula4992323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula5002323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}]; {
    id: "formula4012323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4022323",
    formula: "P = Fv"
}, {
    id: "formula4032323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula4042323",
    formula: "f_n = n f_1"
}, {
    id: "formula4052323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula4062323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula4072323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula4082323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula4092323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4102323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula4112323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula4122323",
    formula: "P = F v"
}, {
    id: "formula4132323",
    formula: "v = \\sqrt{gL}"
}, {
    id: "formula4142323",
    formula: "f_n = n f_1"
}, {
    id: "formula4152323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4162323",
    formula: "P = F v"
}, {
    id: "formula4172323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula4182323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula4192323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula4202323",
    formula: "P = F v"
}, {
    id: "formula4212323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula4222323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula4232323",
    formula: "v = \\sqrt{gL}"
}, {
    id: "formula4242323",
    formula: "E = \\frac{1}{2} m v^2"
}, {
    id: "formula4252323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula4262323",
    formula: "f_n = n f_1"
}, {
    id: "formula4272323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4282323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula4292323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4302323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula4312323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4322323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula4332323",
    formula: "P = F v"
}, {
    id: "formula4342323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, {
    id: "formula4352323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula4362323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4372323",
    formula: "I = \\frac{V}{R}"
}, {
    id: "formula4382323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula4392323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, {
    id: "formula4402323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4412323",
    formula: "f_n = n f_1"
}, {
    id: "formula4422323",
    formula: "f = \\frac{c}{\\lambda}"
}, {
    id: "formula4432323",
    formula: "P = \\frac{V^2}{R}"
}, {
    id: "formula4442323",
    formula: "E = \\frac{1}{2} C V^2"
}, {
    id: "formula4452323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, {
    id: "formula4462323",
    formula: "f = \\frac{1}{T}"
}, {
    id: "formula4472323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, {
    id: "formula4482323",
    formula: "P = F v"
}, {
    id: "formula4492323",
    formula: "f_n = n f_1"
}, {
    id: "formula4502323",
    formula: "P = \\frac{V^2}{R}"
}]; {
    id: "formula3462323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM (Simple Harmonic Motion)
{
    id: "formula3472323",
    formula: "P = Fv"
}, // Power as force times velocity
{
    id: "formula3482323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave in a medium
{
    id: "formula3492323",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula3502323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula3512323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Time period of a simple pendulum
{
    id: "formula3522323",
    formula: "f = \\frac{1}{T}"
}, // Frequency as the inverse of the period
{
    id: "formula3532323",
    formula: "I = \\frac{V}{R}"
}, // Current using Ohm’s Law
{
    id: "formula3542323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor (Ohm’s law)
{
    id: "formula3552323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula3562323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula3572323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula3582323",
    formula: "v = \\sqrt{gL}"
}, // Velocity of wave on a string under tension
{
    id: "formula3592323",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula3602323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula3612323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula3622323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula3632323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula3642323",
    formula: "I = \\frac{V}{R}"
}, // Current formula from Ohm’s law
{
    id: "formula3652323",
    formula: "P = F v"
}, // Power equation for mechanical systems
{
    id: "formula3662323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Time period for simple pendulum
{
    id: "formula3672323",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of time period
{
    id: "formula3682323",
    formula: "v = \\sqrt{gL}"
}, // Velocity of wave on a string under tension
{
    id: "formula3692323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula3702323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula3712323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula3722323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula3732323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula3742323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula3752323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula3762323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula3772323",
    formula: "f = \\frac{1}{T}"
}, // Frequency formula
{
    id: "formula3782323",
    formula: "P = F v"
}, // Power as the product of force and velocity
{
    id: "formula3792323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave in a medium
{
    id: "formula3802323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency formula in terms of wave speed and wavelength
{
    id: "formula3812323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula3822323",
    formula: "I = \\frac{V}{R}"
}, // Current in a circuit using Ohm’s Law
{
    id: "formula3832323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula3842323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula3852323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula3862323",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula3872323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula3882323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula3892323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula3902323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Time period of a simple pendulum
{
    id: "formula3912323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula3922323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula3932323",
    formula: "P = F v"
}, // Power formula for mechanical systems
{
    id: "formula3942323",
    formula: "f_n = n f_1"
}, // Harmonics for a string
{
    id: "formula3952323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula3962323",
    formula: "I = \\frac{V}{R}"
}, // Current from Ohm's law
{
    id: "formula3972323",
    formula: "P = F v"
}, // Power as the product of force and velocity
{
    id: "formula3982323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula3992323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula4002323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula2762323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency and wavelength relationship for waves
{
    id: "formula2772323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in simple harmonic motion (SHM)
{
    id: "formula2782323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula2792323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula2802323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula2812323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula2822323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula2832323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula2842323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula2852323",
    formula: "I = \\frac{V}{R}"
}, // Current using Ohm’s Law
{
    id: "formula2862323",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of the period
{
    id: "formula2872323",
    formula: "v = \\sqrt{g L}"
}, // Velocity of wave on a string under tension
{
    id: "formula2882323",
    formula: "P = \\frac{I^2}{R}"
}, // Power dissipation in a resistor
{
    id: "formula2892323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula2902323",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula2912323",
    formula: "I = m r^2"
}, // Moment of inertia for a point mass
{
    id: "formula2922323",
    formula: "P = \\frac{V}{R}"
}, // Power in electrical circuits
{
    id: "formula2932323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula2942323",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula2952323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula2962323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula2972323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency in terms of wave speed and wavelength
{
    id: "formula2982323",
    formula: "P = F v"
}, // Power as the product of force and velocity
{
    id: "formula2992323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of an object
{
    id: "formula3002323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula3012323",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula3022323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula3032323",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula3042323",
    formula: "I = \\frac{V}{R}"
}, // Current in an electrical circuit
{
    id: "formula3052323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an electrical circuit with inductance
{
    id: "formula3062323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula3072323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula3082323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula3092323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula3102323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula3112323",
    formula: "I = \\frac{V}{R}"
}, // Current in a circuit using Ohm’s Law
{
    id: "formula3122323",
    formula: "f_n = n f_1"
}, // Harmonics for a string
{
    id: "formula3132323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula3142323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula3152323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula3162323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula3172323",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula3182323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula3192323",
    formula: "I = \\frac{V}{R}"
}, // Current in a circuit
{
    id: "formula3202323",
    formula: "v = \\sqrt{g L}"
}, // Speed of a wave on a string
{
    id: "formula3212323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipated in a RLC circuit
{
    id: "formula3222323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula3232323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula3242323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula3252323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula3262323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula3272323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of an object
{
    id: "formula3282323",
    formula: "P = \\frac{V}{R}"
}, // Power in an electrical circuit
{
    id: "formula3292323",
    formula: "I = \\frac{V}{R}"
}, // Current as voltage divided by resistance
{
    id: "formula3302323",
    formula: "v = \\sqrt{g L}"
}, // Velocity of wave on a string
{
    id: "formula3312323",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of period
{
    id: "formula3322323",
    formula: "f_n = n f_1"
}, // Harmonics for a string
{
    id: "formula3332323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula3342323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula3352323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula3362323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula3372323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula3382323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula3392323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave in a medium
{
    id: "formula3402323",
    formula: "I = \\frac{V}{R}"
}, // Current using Ohm's Law
{
    id: "formula3412323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Time period of a simple pendulum
{
    id: "formula3422323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula3432323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula3442323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency and wavelength relationship for waves
{
    id: "formula3452323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
} // Fundamental frequency of a vibrating string
{
    id: "formula2002323",
    formula: "P = V I"
}, // Power in an electrical circuit (voltage x current)
{
    id: "formula2012323",
    formula: "E = mgh"
}, // Potential energy formula (mass x gravity x height)
{
    id: "formula2022323",
    formula: "f_n = n f_1"
}, // Harmonics in a string or standing wave
{
    id: "formula2032323",
    formula: "f = \\frac{1}{T}"
}, // Frequency as the inverse of time period
{
    id: "formula2042323",
    formula: "I = \\frac{V}{R}"
}, // Current as voltage divided by resistance
{
    id: "formula2052323",
    formula: "P = I^2 R"
}, // Power dissipated in a resistor (Ohm's law)
{
    id: "formula2062323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula2072323",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Speed of light in a medium with relative permittivity and permeability
{
    id: "formula2082323",
    formula: "P = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula2092323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship for a wave
{
    id: "formula2102323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity equation for SHM (simple harmonic motion)
{
    id: "formula2112323",
    formula: "a = -A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula2122323",
    formula: "P = \\frac{V^2}{R}"
}, // Power in a resistor (Ohm’s law)
{
    id: "formula2132323",
    formula: "F = -kx"
}, // Hooke’s Law (spring force)
{
    id: "formula2142323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula2152323",
    formula: "I = m r^2"
}, // Moment of inertia for point mass
{
    id: "formula2162323",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula2172323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula2182323",
    formula: "v = \\sqrt{g L}"
}, // Velocity of a wave on a string
{
    id: "formula2192323",
    formula: "a = \\frac{F}{m}"
}, // Acceleration due to force (Newton’s second law)
{
    id: "formula2202323",
    formula: "T = \\frac{1}{f}"
}, // Period as the inverse of frequency
{
    id: "formula2212323",
    formula: "P = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula2222323",
    formula: "P = \\frac{I^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula2232323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula2242323",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula2252323",
    formula: "I = \\frac{V}{R}"
}, // Current in a circuit (Ohm's law)
{
    id: "formula2262323",
    formula: "P = Fv"
}, // Power as force times velocity
{
    id: "formula2272323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave in a medium
{
    id: "formula2282323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a string
{
    id: "formula2292323",
    formula: "X(w) = \\int_{-\\infty}^{\\infty} x(t) e^{-i w t} dt"
}, // Fourier transform of x(t)
{
    id: "formula2302323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency equation
{
    id: "formula2312323",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the rate of change of displacement
{
    id: "formula2322323",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula2332323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency and wavelength relationship
{
    id: "formula2342323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor (Ohm’s law)
{
    id: "formula2352323",
    formula: "f_n = n f_1"
}, // Harmonics of a string
{
    id: "formula2362323",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the derivative of position
{
    id: "formula2372323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy
{
    id: "formula2382323",
    formula: "P = \\frac{V}{R}"
}, // Power formula for electrical circuits
{
    id: "formula2392323",
    formula: "v = \\sqrt{gL}"
}, // Speed of a wave on a string under tension
{
    id: "formula2402323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula2412323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula2422323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula2432323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula2442323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula2452323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula2462323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula2472323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula2482323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula2492323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula2502323",
    formula: "I = \\frac{V}{R}"
}, // Current in an electrical circuit
{
    id: "formula2512323",
    formula: "v = \\sqrt{g L}"
}, // Speed of wave on a string
{
    id: "formula2522323",
    formula: "a = \\frac{F}{m}"
}, // Acceleration from Newton's second law
{
    id: "formula2532323",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency for a vibrating string
{
    id: "formula2542323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula2552323",
    formula: "P = \\frac{I^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula2562323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave in a medium
{
    id: "formula2572323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula2582323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula2592323",
    formula: "I = m r^2"
}, // Moment of inertia for point mass
{
    id: "formula2602323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Time period for a simple pendulum
{
    id: "formula2612323",
    formula: "P = V I"
}, // Electrical power formula (voltage x current)
{
    id: "formula2622323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula2632323",
    formula: "f_n = n f_1"
}, // Harmonics for a string
{
    id: "formula2642323",
    formula: "I = \\frac{V}{R}"
}, // Current as voltage divided by resistance
{
    id: "formula2652323",
    formula: "P = Fv"
}, // Power as force times velocity
{
    id: "formula2662323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of an object
{
    id: "formula2672323",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula2682323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency formula in terms of wave speed and wavelength
{
    id: "formula2692323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula2702323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula2712323",
    formula: "f_{res} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonant frequency of an LC circuit
{
    id: "formula2722323",
    formula: "I = \\frac{V}{R}"
}, // Current using Ohm's law
{
    id: "formula2732323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency equation
{
    id: "formula2742323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula2752323",
    formula: "E = \\frac{1}{2} C V^2"
} // Energy stored in a capacitor
{
    id: "formula1252323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Relationship between frequency and wavelength in vacuum
{
    id: "formula1262323",
    formula: "v = \\sqrt{g L}"
}, // Speed of wave on a string under tension
{
    id: "formula1272323",
    formula: "f = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}"
}, // Frequency of a mass-spring system
{
    id: "formula1282323",
    formula: "T = \\frac{1}{f}"
}, // Time period of oscillation
{
    id: "formula1292323",
    formula: "f = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula1302323",
    formula: "P = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula1312323",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula1322323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from period
{
    id: "formula1332323",
    formula: "v = \\lambda f"
}, // Wave velocity equation
{
    id: "formula1342323",
    formula: "I = m r^2"
}, // Moment of inertia of a point mass
{
    id: "formula1352323",
    formula: "F = -kx"
}, // Hooke’s law for spring force
{
    id: "formula1362323",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, // Cosine wave displacement equation
{
    id: "formula1372323",
    formula: "a = \\frac{F}{m}"
}, // Newton’s second law of motion
{
    id: "formula1382323",
    formula: "P = Fv"
}, // Power as force times velocity
{
    id: "formula1392323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula1402323",
    formula: "x(t) = A e^{i \\omega t}"
}, // Complex exponential form of a wave
{
    id: "formula1412323",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal displacement equation
{
    id: "formula1422323",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in harmonic motion
{
    id: "formula1432323",
    formula: "a_{max} = A \\omega^2"
}, // Maximum acceleration in SHM
{
    id: "formula1442323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula1452323",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the rate of change of position
{
    id: "formula1462323",
    formula: "F_{spring} = -kx"
}, // Spring force from Hooke’s law
{
    id: "formula1472323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor (Ohm’s law)
{
    id: "formula1482323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula1492323",
    formula: "v = \\sqrt{gL}"
}, // Speed of a wave on a string
{
    id: "formula1502323",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula1512323",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula1522323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a string vibrating in its fundamental mode
{
    id: "formula1532323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula1542323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula1552323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula1562323",
    formula: "I = \\int_0^T x(t) dt"
}, // Total energy of a signal over time
{
    id: "formula1572323",
    formula: "F = \\mu m g"
}, // Force due to friction on a mass
{
    id: "formula1582323",
    formula: "f = \\frac{1}{2 L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula1592323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an RLC circuit
{
    id: "formula1602323",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Speed of light in a medium
{
    id: "formula1612323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave in a medium
{
    id: "formula1622323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula1632323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula1642323",
    formula: "T = \\frac{1}{f}"
}, // Time period of a periodic signal
{
    id: "formula1652323",
    formula: "f = \\frac{1}{T}"
}, // Frequency of a periodic signal
{
    id: "formula1662323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula1672323",
    formula: "v = v_0 + at"
}, // Velocity with uniform acceleration
{
    id: "formula1682323",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula1692323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula1702323",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula1712323",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula1722323",
    formula: "I = m r^2"
}, // Moment of inertia for point mass
{
    id: "formula1732323",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula1742323",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, // Sum of discrete signal values
{
    id: "formula1752323",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula1762323",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula1772323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula1782323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy of a wave in a medium
{
    id: "formula1792323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula1802323",
    formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula1812323",
    formula: "T = \\frac{1}{f}"
}, // Period from frequency
{
    id: "formula1822323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula1832323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula1842323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula1852323",
    formula: "v = \\frac{dx}{dt}"
}, // Rate of change of position
{
    id: "formula1862323",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula1872323",
    formula: "T = \\frac{2L}{v}"
}, // Time period of a standing wave
{
    id: "formula1882323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula1892323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation formula for RLC circuits
{
    id: "formula1902323",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity of a wave
{
    id: "formula1912323",
    formula: "I = \\frac{V}{R}"
}, // Ohm's Law for current
{
    id: "formula1922323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency equation for waves
{
    id: "formula1932323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for electrical circuits
{
    id: "formula1942323",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula1952323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula1962323",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, // Sum of signal values
{
    id: "formula1972323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula1982323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula1992323",
    formula: "E = \\frac{1}{2} C V^2"
} // Energy stored in a capacitor
{
    id: "formula762323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Relationship between frequency and wavelength
{
    id: "formula772323",
    formula: "v = v_0 + at"
}, // Velocity formula for uniformly accelerated motion
{
    id: "formula782323",
    formula: "v = \\sqrt{g L}"
}, // Velocity of a wave on a string under tension
{
    id: "formula792323",
    formula: "f = \\frac{1}{2 \\pi} \\sqrt{\\frac{k}{m}}"
}, // Natural frequency of a mass-spring system
{
    id: "formula802323",
    formula: "I = m r^2"
}, // Moment of inertia for a point mass
{
    id: "formula812323",
    formula: "F = \\mu N"
}, // Frictional force formula
{
    id: "formula822323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula832323",
    formula: "P = \\frac{F}{A}"
}, // Pressure formula (Force per unit area)
{
    id: "formula842323",
    formula: "f_n = n f_1"
}, // Harmonics formula for string vibrations
{
    id: "formula852323",
    formula: "f(t) = A e^{i \\omega t}"
}, // Exponential function representation of a wave
{
    id: "formula862323",
    formula: "F_{spring} = -k x"
}, // Hooke's Law for spring force
{
    id: "formula872323",
    formula: "v = \\frac{2 d}{t}"
}, // Average velocity formula
{
    id: "formula882323",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula892323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula902323",
    formula: "I = \\int_0^T x(t) dt"
}, // Total energy of a signal over time
{
    id: "formula912323",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula922323",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Speed of wave in a medium
{
    id: "formula932323",
    formula: "P = V^2 / R"
}, // Power dissipated by a resistor in an electrical circuit
{
    id: "formula942323",
    formula: "E_{cap} = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula952323",
    formula: "P = \\frac{1}{2} m v^2"
}, // Power of a harmonic oscillator
{
    id: "formula962323",
    formula: "f_{res} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonance frequency of an LC circuit
{
    id: "formula972323",
    formula: "F = \\mu m g"
}, // Force due to friction on a mass
{
    id: "formula982323",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal function for displacement in a wave
{
    id: "formula992323",
    formula: "v = \\lambda f"
}, // Wave velocity formula
{
    id: "formula1002323",
    formula: "R = \\frac{\\rho L}{A}"
}, // Resistance formula
{
    id: "formula1012323",
    formula: "V = I R"
}, // Ohm's Law for voltage
{
    id: "formula1022323",
    formula: "P = I V"
}, // Electrical power formula
{
    id: "formula1032323",
    formula: "A_{circ} = \\pi r^2"
}, // Area of a circle
{
    id: "formula1042323",
    formula: "C = 2 \\pi r"
}, // Circumference of a circle
{
    id: "formula1052323",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in simple harmonic motion
{
    id: "formula1062323",
    formula: "a_{max} = A \\omega^2"
}, // Maximum acceleration in SHM
{
    id: "formula1072323",
    formula: "T = \\frac{2\\pi}{\\omega}"
}, // Time period from angular frequency
{
    id: "formula1082323",
    formula: "I = \\frac{1}{2} m r^2"
}, // Moment of inertia for a solid disc
{
    id: "formula1092323",
    formula: "P_{max} = \\frac{1}{2} \\rho A v^3"
}, // Maximum power of a wave in a medium
{
    id: "formula1102323",
    formula: "f = \\frac{1}{2 L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula1112323",
    formula: "I = I_0 e^{-\\alpha x}"
}, // Intensity attenuation in a medium
{
    id: "formula1122323",
    formula: "f_n = \\frac{n}{2L} \\sqrt{T / \\mu}"
}, // Frequency of the nth harmonic
{
    id: "formula1132323",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the rate of change of displacement
{
    id: "formula1142323",
    formula: "T = \\frac{1}{f}"
}, // Period of oscillation in SHM
{
    id: "formula1152323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Kinetic energy of a particle in a wave
{
    id: "formula1162323",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in a wave
{
    id: "formula1172323",
    formula: "a = -\\omega^2 x"
}, // Acceleration in simple harmonic motion
{
    id: "formula1182323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula1192323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula1202323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an electrical circuit with inductance
{
    id: "formula1212323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula1222323",
    formula: "f_0 = \\frac{1}{2 \\pi} \\sqrt{\\frac{k}{m}}"
}, // Natural frequency of a mass-spring system
{
    id: "formula1232323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula in an electrical circuit
{
    id: "formula1242323",
    formula: "X(w) = \\int_{-\\infty}^{\\infty} x(t) e^{-i w t} dt"
} // Fourier Transform
{
    id: "formula382323",
    formula: "f = f_0 \\cdot 2^{n/12}"
}, // Frequency of nth harmonic in equal temperament
{
    id: "formula392323",
    formula: "x(t) = A \\cos(2 \\pi f t + \\phi)"
}, // Cosine wave function
{
    id: "formula402323",
    formula: "dB = 10 \\log_{10} \\left( \\frac{P}{P_0} \\right)"
}, // Decibel formula
{
    id: "formula412323",
    formula: "A = \\frac{1}{2} L m v^2"
}, // Energy in a vibrating string
{
    id: "formula422323",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula432323",
    formula: "C = \\sum_{n=0}^{N-1} x_n"
}, // Sum of discrete signal values
{
    id: "formula442323",
    formula: "T = \\frac{2 L}{v}"
}, // Period of a standing wave on a string
{
    id: "formula452323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula462323",
    formula: "P = A \\cdot \\omega"
}, // Power in a harmonic oscillator
{
    id: "formula472323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a vibrating particle
{
    id: "formula482323",
    formula: "F = -kx"
}, // Hooke's Law for spring systems
{
    id: "formula492323",
    formula: "f = f_0 \\cdot 2^{n/12}"
}, // Harmonic series frequency formula
{
    id: "formula502323",
    formula: "\\Delta f = \\frac{1}{T}"
}, // Frequency resolution in Fourier Transform
{
    id: "formula512323",
    formula: "I = \\int_{0}^{T} |x(t)|^2 dt"
}, // Energy of a signal over time
{
    id: "formula522323",
    formula: "T = \\frac{1}{f_0}"
}, // Period of a simple sine wave
{
    id: "formula532323",
    formula: "f_{max} = 2 f_{fundamental}"
}, // Maximum frequency in harmonic series
{
    id: "formula542323",
    formula: "p = \\frac{F}{A}"
}, // Pressure formula (Force per unit area)
{
    id: "formula552323",
    formula: "\\lambda = \\frac{c}{f}"
}, // Wavelength formula for waves
{
    id: "formula562323",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonant frequency of LC circuit
{
    id: "formula572323",
    formula: "T = \\frac{2L}{g}"
}, // Time period of a simple pendulum
{
    id: "formula582323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula592323",
    formula: "v = \\lambda f"
}, // Wave velocity formula
{
    id: "formula602323",
    formula: "Q = \\frac{v}{\\rho}"
}, // Volume flow rate formula
{
    id: "formula612323",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula622323",
    formula: "v = \\sqrt{\\frac{T}{\\mu}}"
}, // Wave velocity on a string
{
    id: "formula632323",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula642323",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula652323",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of time period
{
    id: "formula662323",
    formula: "x(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal signal function
{
    id: "formula672323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula682323",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula692323",
    formula: "R = \\frac{\\rho L}{A}"
}, // Resistance formula (Ohm's law)
{
    id: "formula702323",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula712323",
    formula: "v = \\sqrt{\\frac{E}{\\rho}}"
}, // Speed of sound in a medium
{
    id: "formula722323",
    formula: "F = \\frac{1}{2} k x^2"
}, // Potential energy stored in a spring
{
    id: "formula732323",
    formula: "f(t) = \\int_{0}^{\\infty} X(w) e^{i w t} dw"
}, // Inverse Fourier transform
{
    id: "formula742323",
    formula: "x(t) = \\sum_{n=-\\infty}^{\\infty} X[k] e^{i \\frac{2\\pi}{N} k n}"
}, // Inverse DFT formula
{
    id: "formula752323",
    formula: "X(w) = \\int_{-\\infty}^{\\infty} x(t) e^{-i w t} dt"
} // Fourier transform of x(t)
{
    id: "formula3962323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula3972323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula3982323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula3992323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula4002323",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula4012323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula4022323",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula4032323",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula4042323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in a circuit with inductance
{
    id: "formula4052323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula4062323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula4072323",
    formula: "v = v_0 + at"
}, // Velocity formula for uniformly accelerated motion
{
    id: "formula4082323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula4092323",
    formula: "P = F v"
}, // Power formula in terms of force and velocity
{
    id: "formula4102323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula4112323",
    formula: "P = V I"
}, // Electrical power formula (voltage x current)
{
    id: "formula4122323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency for a string
{
    id: "formula4132323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula4142323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula4152323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula4162323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula4172323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency formula in terms of wavelength
{
    id: "formula4182323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula4192323",
    formula: "I = \\frac{V}{R}"
}, // Current using Ohm's law
{
    id: "formula4202323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula4212323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency equation
{
    id: "formula4222323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula4232323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula4242323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula4252323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula4262323",
    formula: "f = \\frac{1}{T}"
}, // Frequency as the inverse of the time period
{
    id: "formula4272323",
    formula: "I = \\frac{V}{R}"
}, // Current as voltage divided by resistance
{
    id: "formula4282323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in simple harmonic motion
{
    id: "formula4292323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula4302323",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula4312323",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula4322323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula4332323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave in a medium
{
    id: "formula4342323",
    formula: "v = v_0 + at"
}, // Velocity in uniformly accelerated motion
{
    id: "formula4352323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula4362323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula4372323",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula4382323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula4392323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula4402323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an RLC circuit
{
    id: "formula4412323",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula4422323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula4432323",
    formula: "P = \\frac{V}{R}"
}, // Power in an electrical circuit
{
    id: "formula4442323",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula4452323",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula4462323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula4472323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a string
{
    id: "formula4482323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula4492323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula4502323",
    formula: "P = \\frac{V^2}{R}"
} // Power dissipated in a resistor
{
    id: "formula5512323",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula5522323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula5532323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula5542323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula5552323",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula5562323",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula5572323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula5582323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula5592323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula5602323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula5612323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula5622323",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula5632323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula5642323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula5652323",
    formula: "f_n = n f_1"
}, // Harmonics for string vibrations
{
    id: "formula5662323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipated in an RLC circuit
{
    id: "formula5672323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula5682323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula5692323",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula5702323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula5712323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula5722323",
    formula: "f_n = n f_1"
}, // Harmonics for string vibrations
{
    id: "formula5732323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula5742323",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula5752323",
    formula: "T = \\frac{2L}{v}"
}, // Time period for wave on a string
{
    id: "formula5762323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula5772323",
    formula: "f_n = n f_1"
}, // Harmonics for string vibrations
{
    id: "formula5782323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula5792323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula5802323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula5812323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency for a string
{
    id: "formula5822323",
    formula: "f_n = n f_1"
}, // Harmonics for string vibrations
{
    id: "formula5832323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula5842323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula5852323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula5862323",
    formula: "T = \\frac{2L}{v}"
}, // Time period for wave on a string
{
    id: "formula5872323",
    formula: "f_n = n f_1"
}, // Harmonics for string vibrations
{
    id: "formula5882323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula5892323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula5902323",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula5912323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula5922323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula5932323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula5942323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of an object
{
    id: "formula5952323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula5962323",
    formula: "f_n = n f_1"
}, // Harmonics for string vibrations
{
    id: "formula5972323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula5982323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula5992323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a pendulum
{
    id: "formula6002323",
    formula: "f_n = n f_1"
} // Harmonics for string vibrations
{
    id: "formula5012323",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula5022323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula5032323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula5042323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula5052323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a string
{
    id: "formula5062323",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula5072323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula5082323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula5092323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula5102323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula5112323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula5122323",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula5132323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula5142323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula5152323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula5162323",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula5172323",
    formula: "T = \\frac{1}{f}"
}, // Time period formula from frequency
{
    id: "formula5182323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipated in an RLC circuit
{
    id: "formula5192323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula5202323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency for a string
{
    id: "formula5212323",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula5222323",
    formula: "f_n = n f_1"
}, // Harmonics of a string
{
    id: "formula5232323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula5242323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula5252323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula5262323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula5272323",
    formula: "f_n = n f_1"
}, // Harmonics for string vibrations
{
    id: "formula5282323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula5292323",
    formula: "P = F v"
}, // Power equation as force times velocity
{
    id: "formula5302323",
    formula: "f_n = n f_1"
}, // nth harmonic for a vibrating string
{
    id: "formula5312323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula5322323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula5332323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula5342323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipated in an RLC circuit
{
    id: "formula5352323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Time period of a pendulum
{
    id: "formula5362323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula5372323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula5382323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency formula for a string
{
    id: "formula5392323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula5402323",
    formula: "f_n = n f_1"
}, // Harmonics of a string
{
    id: "formula5412323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula5422323",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula5432323",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula5442323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula5452323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a string
{
    id: "formula5462323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength in waves
{
    id: "formula5472323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula5482323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of an object
{
    id: "formula5492323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula5502323",
    formula: "P = \\frac{V^2}{R}"
} // Power dissipated in a resistor
{
    id: "formula4512323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula4522323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula4532323",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula4542323",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula4552323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula4562323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula4572323",
    formula: "I = \\frac{V}{R}"
}, // Current using Ohm’s law
{
    id: "formula4582323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula4592323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula4602323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a string
{
    id: "formula4612323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula4622323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula4632323",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula4642323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula4652323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula4662323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipated in a RLC circuit
{
    id: "formula4672323",
    formula: "v = \\sqrt{gL}"
}, // Wave velocity on a string under tension
{
    id: "formula4682323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula4692323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula4702323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula4712323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula4722323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula4732323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula4742323",
    formula: "I = \\frac{V}{R}"
}, // Current in a circuit using Ohm's law
{
    id: "formula47523",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula47623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula47723",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula47823",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula47923",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula48023",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula48123",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula48223",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula48323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in a resistive-inductive circuit
{
    id: "formula48423",
    formula: "v = \\sqrt{gL}"
}, // Wave velocity in a string under tension
{
    id: "formula48523",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula48623",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula48723",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula48823",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula48923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula49023",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula49123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula49223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula49323",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula49423",
    formula: "f_n = n f_1"
}, // Harmonics of a string
{
    id: "formula49523",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of an object
{
    id: "formula49623",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula49723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula49823",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula49923",
    formula: "P = F v"
}, // Power formula as the product of force and velocity
{
    id: "formula50023",
    formula: "f = \\frac{v}{\\lambda}"
} // Frequency in terms of wave speed and wavelength
{
    id: "formula39623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula39723",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula39823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula39923",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula40023",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula40123",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula40223",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula40323",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula40423",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in a circuit with inductance
{
    id: "formula40523",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula40623",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula40723",
    formula: "v = v_0 + at"
}, // Velocity formula for uniformly accelerated motion
{
    id: "formula40823",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula40923",
    formula: "P = F v"
}, // Power formula in terms of force and velocity
{
    id: "formula41023",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula41123",
    formula: "P = V I"
}, // Electrical power formula (voltage x current)
{
    id: "formula41223",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency for a string
{
    id: "formula41323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula41423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula41523",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula41623",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula41723",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency formula in terms of wavelength
{
    id: "formula41823",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula41923",
    formula: "I = \\frac{V}{R}"
}, // Current using Ohm's law
{
    id: "formula42023",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula42123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency equation
{
    id: "formula42223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula42323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula42423",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula42523",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula42623",
    formula: "f = \\frac{1}{T}"
}, // Frequency as the inverse of the time period
{
    id: "formula42723",
    formula: "I = \\frac{V}{R}"
}, // Current as voltage divided by resistance
{
    id: "formula42823",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in simple harmonic motion
{
    id: "formula42923",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula43023",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula43123",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula43223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula43323",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave in a medium
{
    id: "formula43423",
    formula: "v = v_0 + at"
}, // Velocity in uniformly accelerated motion
{
    id: "formula43523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula43623",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula43723",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula43823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula43923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula44023",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an RLC circuit
{
    id: "formula44123",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula44223",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula44323",
    formula: "P = \\frac{V}{R}"
}, // Power in an electrical circuit
{
    id: "formula44423",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula44523",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula44623",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula44723",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a string
{
    id: "formula44823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula44923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula45023",
    formula: "P = \\frac{V^2}{R}"
} // Power dissipated in a resistor
{
    id: "formula32623",
    formula: "P = \\frac{I^2}{R}"
}, // Power dissipated in a resistor (current squared times resistance)
{
    id: "formula32723",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula32823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula32923",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula33023",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in simple harmonic motion (SHM)
{
    id: "formula33123",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula33223",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula33323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula33423",
    formula: "v = \\sqrt{g L}"
}, // Wave velocity on a string under tension
{
    id: "formula33523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula33623",
    formula: "E_{cap} = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula33723",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency for a vibrating string
{
    id: "formula33823",
    formula: "P = F v"
}, // Power as the product of force and velocity
{
    id: "formula33923",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula34023",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s Law for current
{
    id: "formula34123",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula34223",
    formula: "v = \\sqrt{g L}"
}, // Wave velocity in a string under tension
{
    id: "formula34323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula34423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula34523",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency for vibrating string
{
    id: "formula34623",
    formula: "P = \\frac{V}{R}"
}, // Power in a circuit
{
    id: "formula34723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula34823",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a medium
{
    id: "formula34923",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula35023",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonant frequency of an LC circuit
{
    id: "formula35123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula35223",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula35323",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula35423",
    formula: "I = \\frac{V}{R}"
}, // Current using Ohm's law
{
    id: "formula35523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula35623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by resistor
{
    id: "formula35723",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula35823",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula35923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula36023",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula36123",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula36223",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula36323",
    formula: "I = \\frac{V}{R}"
}, // Current in a resistor
{
    id: "formula36423",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula36523",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula36623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wave speed and wavelength
{
    id: "formula36723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula36823",
    formula: "v = \\sqrt{g L}"
}, // Wave velocity on a string under tension
{
    id: "formula36923",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula37023",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula37123",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula37223",
    formula: "I = \\frac{V}{R}"
}, // Current using Ohm's Law
{
    id: "formula37323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Time period for a simple pendulum
{
    id: "formula37423",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a string
{
    id: "formula37523",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency as velocity divided by wavelength
{
    id: "formula37623",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an electrical circuit with inductance
{
    id: "formula37723",
    formula: "T = \\frac{1}{f}"
}, // Time period as the inverse of frequency
{
    id: "formula37823",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of the period
{
    id: "formula37923",
    formula: "I = \\frac{V}{R}"
}, // Current in a circuit using Ohm’s law
{
    id: "formula38023",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula38123",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula38223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula38323",
    formula: "P = F v"
}, // Power as the product of force and velocity
{
    id: "formula38423",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the rate of change of displacement
{
    id: "formula38523",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula38623",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula38723",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of time period
{
    id: "formula38823",
    formula: "I = \\frac{V}{R}"
}, // Current in a circuit
{
    id: "formula38923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula39023",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a string
{
    id: "formula39123",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula39223",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in a resistive-inductive circuit
{
    id: "formula39323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula39423",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula39523",
    formula: "E = \\frac{1}{2} \\mu v^2"
} // Energy in a wave in a medium
{
    id: "formula26623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula26723",
    formula: "v = v_0 + at"
}, // Velocity in uniformly accelerated motion
{
    id: "formula26823",
    formula: "T = \\frac{2L}{v}"
}, // Time period of a standing wave on a string
{
    id: "formula26923",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula27023",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula27123",
    formula: "v = \\sqrt{gL}"
}, // Wave velocity in a string under tension
{
    id: "formula27223",
    formula: "P = Fv"
}, // Power in terms of force and velocity
{
    id: "formula27323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula27423",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula27523",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula27623",
    formula: "f_n = n f_1"
}, // nth harmonic frequency of a vibrating string
{
    id: "formula27723",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula27823",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula27923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipation in resistor
{
    id: "formula28023",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula28123",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonant frequency for an LC circuit
{
    id: "formula28223",
    formula: "P = Fv"
}, // Power from force and velocity
{
    id: "formula28323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula28423",
    formula: "E_{cap} = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula28523",
    formula: "a = \\frac{F}{m}"
}, // Acceleration from force and mass (Newton's second law)
{
    id: "formula28623",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency equation
{
    id: "formula28723",
    formula: "f_n = \\frac{n}{2L} \\sqrt{T / \\mu}"
}, // nth harmonic frequency for a vibrating string
{
    id: "formula28823",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula28923",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an RLC circuit
{
    id: "formula29023",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula29123",
    formula: "I = \\frac{V}{R}"
}, // Ohm's Law for current
{
    id: "formula29223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by resistor
{
    id: "formula29323",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula29423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistor
{
    id: "formula29523",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula29623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula29723",
    formula: "v = v_0 + at"
}, // Velocity formula for uniformly accelerated motion
{
    id: "formula29823",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula29923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula30023",
    formula: "P = V I"
}, // Power formula in electrical circuits
{
    id: "formula30123",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a medium
{
    id: "formula30223",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as rate of change of displacement
{
    id: "formula30323",
    formula: "P = Fv"
}, // Power formula in terms of force and velocity
{
    id: "formula30423",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula30523",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula30623",
    formula: "f_n = \\frac{n}{2L} \\sqrt{T / \\mu}"
}, // nth harmonic frequency for a vibrating string
{
    id: "formula30723",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula30823",
    formula: "T = \\frac{2L}{v}"
}, // Time period of standing wave
{
    id: "formula30923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistor
{
    id: "formula31023",
    formula: "a = \\frac{F}{m}"
}, // Acceleration from force and mass
{
    id: "formula31123",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula31223",
    formula: "v = \\sqrt{gL}"
}, // Wave velocity in a string under tension
{
    id: "formula31323",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula31423",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonant frequency in an LC circuit
{
    id: "formula31523",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula31623",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency equation
{
    id: "formula31723",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula31823",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula31923",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Time period of a simple pendulum
{
    id: "formula32023",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula32123",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula32223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula32323",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula32423",
    formula: "P = V I"
}, // Power in electrical circuits
{
    id: "formula32523",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula20023",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency formula in terms of speed and wavelength
{
    id: "formula20123",
    formula: "f_n = \\frac{n}{2L} \\sqrt{T / \\mu}"
}, // nth harmonic frequency for a vibrating string
{
    id: "formula20223",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula20323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy
{
    id: "formula20423",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula20523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor (Ohm’s law)
{
    id: "formula20623",
    formula: "T = \\frac{2L}{v}"
}, // Time period of a standing wave on a string
{
    id: "formula20723",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula20823",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula20923",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula21023",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula21123",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal displacement equation
{
    id: "formula21223",
    formula: "E_{cap} = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula21323",
    formula: "F = \\mu m g"
}, // Force of friction
{
    id: "formula21423",
    formula: "v = v_0 + at"
}, // Velocity for uniformly accelerated motion
{
    id: "formula21523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula21623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula21723",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, // Sum of discrete signal values
{
    id: "formula21823",
    formula: "v = \\sqrt{g L}"
}, // Speed of wave on a string under tension
{
    id: "formula21923",
    formula: "f_n = \\frac{n}{2L} \\sqrt{T / \\mu}"
}, // nth harmonic for vibrating strings
{
    id: "formula22023",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula22123",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula22223",
    formula: "a = \\frac{F}{m}"
}, // Acceleration from force and mass (Newton's second law)
{
    id: "formula22323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave velocity and wavelength
{
    id: "formula22423",
    formula: "X = \\frac{V}{I}"
}, // Impedance of a circuit
{
    id: "formula22523",
    formula: "T = \\frac{1}{f}"
}, // Time period of oscillation
{
    id: "formula22623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula22723",
    formula: "A_{circ} = \\pi r^2"
}, // Area of a circle
{
    id: "formula22823",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula22923",
    formula: "f_0 = \\frac{1}{2 L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula23023",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the rate of change of displacement
{
    id: "formula23123",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula23223",
    formula: "f_{max} = 2 f_0"
}, // Maximum frequency of harmonics
{
    id: "formula23323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by resistor
{
    id: "formula23423",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonant frequency of LC circuit
{
    id: "formula23523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Relationship between frequency and wavelength
{
    id: "formula23623",
    formula: "P = V I"
}, // Power in electrical circuits
{
    id: "formula23723",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula23823",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an RLC circuit
{
    id: "formula23923",
    formula: "T = \\frac{1}{f}"
}, // Time period formula
{
    id: "formula24023",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula24123",
    formula: "f_n = \\frac{n}{2L} \\sqrt{T / \\mu}"
}, // nth harmonic in a vibrating string
{
    id: "formula24223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by resistor
{
    id: "formula24323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula24423",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula24523",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula24623",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula24723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula24823",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula24923",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula25023",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency
{
    id: "formula25123",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula25223",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula25323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula25423",
    formula: "X = \\frac{V}{I}"
}, // Impedance of a circuit
{
    id: "formula25523",
    formula: "T = \\frac{2L}{v}"
}, // Time period of a standing wave
{
    id: "formula25623",
    formula: "a = \\frac{F}{m}"
}, // Acceleration from force
{
    id: "formula25723",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonance frequency for LC circuit
{
    id: "formula25823",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a string
{
    id: "formula25923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistor
{
    id: "formula26023",
    formula: "E_{cap} = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula26123",
    formula: "f_n = \\frac{n}{2L} \\sqrt{T / \\mu}"
}, // nth harmonic frequency
{
    id: "formula26223",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula26323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency of a wave
{
    id: "formula26423",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of vibrating string
{
    id: "formula26523",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
} // Period of a simple pendulum
{
    id: "formula12523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Relationship between frequency and wavelength in vacuum
{
    id: "formula12623",
    formula: "v = \\sqrt{g L}"
}, // Speed of wave on a string under tension
{
    id: "formula12723",
    formula: "f = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}"
}, // Frequency of a mass-spring system
{
    id: "formula12823",
    formula: "T = \\frac{1}{f}"
}, // Time period of oscillation
{
    id: "formula12923",
    formula: "f = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula13023",
    formula: "P = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula13123",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula13223",
    formula: "f = \\frac{1}{T}"
}, // Frequency from period
{
    id: "formula13323",
    formula: "v = \\lambda f"
}, // Wave velocity equation
{
    id: "formula13423",
    formula: "I = m r^2"
}, // Moment of inertia of a point mass
{
    id: "formula13523",
    formula: "F = -kx"
}, // Hooke’s law for spring force
{
    id: "formula13623",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, // Cosine wave displacement equation
{
    id: "formula13723",
    formula: "a = \\frac{F}{m}"
}, // Newton’s second law of motion
{
    id: "formula13823",
    formula: "P = Fv"
}, // Power as force times velocity
{
    id: "formula13923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula14023",
    formula: "x(t) = A e^{i \\omega t}"
}, // Complex exponential form of a wave
{
    id: "formula14123",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal displacement equation
{
    id: "formula14223",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in harmonic motion
{
    id: "formula14323",
    formula: "a_{max} = A \\omega^2"
}, // Maximum acceleration in SHM
{
    id: "formula14423",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula14523",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the rate of change of position
{
    id: "formula14623",
    formula: "F_{spring} = -kx"
}, // Spring force from Hooke’s law
{
    id: "formula14723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor (Ohm’s law)
{
    id: "formula14823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula14923",
    formula: "v = \\sqrt{gL}"
}, // Speed of a wave on a string
{
    id: "formula15023",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula15123",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula15223",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a string vibrating in its fundamental mode
{
    id: "formula15323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula15423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula15523",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula15623",
    formula: "I = \\int_0^T x(t) dt"
}, // Total energy of a signal over time
{
    id: "formula15723",
    formula: "F = \\mu m g"
}, // Force due to friction on a mass
{
    id: "formula15823",
    formula: "f = \\frac{1}{2 L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula15923",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an RLC circuit
{
    id: "formula16023",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Speed of light in a medium
{
    id: "formula16123",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave in a medium
{
    id: "formula16223",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula16323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula16423",
    formula: "T = \\frac{1}{f}"
}, // Time period of a periodic signal
{
    id: "formula16523",
    formula: "f = \\frac{1}{T}"
}, // Frequency of a periodic signal
{
    id: "formula16623",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula16723",
    formula: "v = v_0 + at"
}, // Velocity with uniform acceleration
{
    id: "formula16823",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula16923",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula17023",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula17123",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula17223",
    formula: "I = m r^2"
}, // Moment of inertia for point mass
{
    id: "formula17323",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula17423",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, // Sum of discrete signal values
{
    id: "formula17523",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula17623",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula17723",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula17823",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy of a wave in a medium
{
    id: "formula17923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula18023",
    formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula18123",
    formula: "T = \\frac{1}{f}"
}, // Period from frequency
{
    id: "formula18223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula18323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula18423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula18523",
    formula: "v = \\frac{dx}{dt}"
}, // Rate of change of position
{
    id: "formula18623",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula18723",
    formula: "T = \\frac{2L}{v}"
}, // Time period of a standing wave
{
    id: "formula18823",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula18923",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation formula for RLC circuits
{
    id: "formula19023",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity of a wave
{
    id: "formula19123",
    formula: "I = \\frac{V}{R}"
}, // Ohm's Law for current
{
    id: "formula19223",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency equation for waves
{
    id: "formula19323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for electrical circuits
{
    id: "formula19423",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula19523",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula19623",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, // Sum of signal values
{
    id: "formula19723",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula19823",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula19923",
    formula: "E = \\frac{1}{2} C V^2"
} // Energy stored in a capacitor
{
    id: "formula7623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Relationship between frequency and wavelength
{
    id: "formula7723",
    formula: "v = v_0 + at"
}, // Velocity formula for uniformly accelerated motion
{
    id: "formula7823",
    formula: "v = \\sqrt{g L}"
}, // Velocity of a wave on a string under tension
{
    id: "formula7923",
    formula: "f = \\frac{1}{2 \\pi} \\sqrt{\\frac{k}{m}}"
}, // Natural frequency of a mass-spring system
{
    id: "formula8023",
    formula: "I = m r^2"
}, // Moment of inertia for a point mass
{
    id: "formula8123",
    formula: "F = \\mu N"
}, // Frictional force formula
{
    id: "formula8223",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula8323",
    formula: "P = \\frac{F}{A}"
}, // Pressure formula (Force per unit area)
{
    id: "formula8423",
    formula: "f_n = n f_1"
}, // Harmonics formula for string vibrations
{
    id: "formula8523",
    formula: "f(t) = A e^{i \\omega t}"
}, // Exponential function representation of a wave
{
    id: "formula8623",
    formula: "F_{spring} = -k x"
}, // Hooke's Law for spring force
{
    id: "formula8723",
    formula: "v = \\frac{2 d}{t}"
}, // Average velocity formula
{
    id: "formula8823",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula8923",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula9023",
    formula: "I = \\int_0^T x(t) dt"
}, // Total energy of a signal over time
{
    id: "formula9123",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula9223",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Speed of wave in a medium
{
    id: "formula9323",
    formula: "P = V^2 / R"
}, // Power dissipated by a resistor in an electrical circuit
{
    id: "formula9423",
    formula: "E_{cap} = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula9523",
    formula: "P = \\frac{1}{2} m v^2"
}, // Power of a harmonic oscillator
{
    id: "formula9623",
    formula: "f_{res} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonance frequency of an LC circuit
{
    id: "formula9723",
    formula: "F = \\mu m g"
}, // Force due to friction on a mass
{
    id: "formula9823",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal function for displacement in a wave
{
    id: "formula9923",
    formula: "v = \\lambda f"
}, // Wave velocity formula
{
    id: "formula10023",
    formula: "R = \\frac{\\rho L}{A}"
}, // Resistance formula
{
    id: "formula10123",
    formula: "V = I R"
}, // Ohm's Law for voltage
{
    id: "formula10223",
    formula: "P = I V"
}, // Electrical power formula
{
    id: "formula10323",
    formula: "A_{circ} = \\pi r^2"
}, // Area of a circle
{
    id: "formula10423",
    formula: "C = 2 \\pi r"
}, // Circumference of a circle
{
    id: "formula10523",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in simple harmonic motion
{
    id: "formula10623",
    formula: "a_{max} = A \\omega^2"
}, // Maximum acceleration in SHM
{
    id: "formula10723",
    formula: "T = \\frac{2\\pi}{\\omega}"
}, // Time period from angular frequency
{
    id: "formula10823",
    formula: "I = \\frac{1}{2} m r^2"
}, // Moment of inertia for a solid disc
{
    id: "formula10923",
    formula: "P_{max} = \\frac{1}{2} \\rho A v^3"
}, // Maximum power of a wave in a medium
{
    id: "formula11023",
    formula: "f = \\frac{1}{2 L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula11123",
    formula: "I = I_0 e^{-\\alpha x}"
}, // Intensity attenuation in a medium
{
    id: "formula11223",
    formula: "f_n = \\frac{n}{2L} \\sqrt{T / \\mu}"
}, // Frequency of the nth harmonic
{
    id: "formula11323",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the rate of change of displacement
{
    id: "formula11423",
    formula: "T = \\frac{1}{f}"
}, // Period of oscillation in SHM
{
    id: "formula11523",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Kinetic energy of a particle in a wave
{
    id: "formula11623",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in a wave
{
    id: "formula11723",
    formula: "a = -\\omega^2 x"
}, // Acceleration in simple harmonic motion
{
    id: "formula11823",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula11923",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula12023",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an electrical circuit with inductance
{
    id: "formula12123",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula12223",
    formula: "f_0 = \\frac{1}{2 \\pi} \\sqrt{\\frac{k}{m}}"
}, // Natural frequency of a mass-spring system
{
    id: "formula12323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula in an electrical circuit
{
    id: "formula12423",
    formula: "X(w) = \\int_{-\\infty}^{\\infty} x(t) e^{-i w t} dt"
} // Fourier Transform
{
    id: "formula3823",
    formula: "f = f_0 \\cdot 2^{n/12}"
}, // Frequency of nth harmonic in equal temperament
{
    id: "formula3923",
    formula: "x(t) = A \\cos(2 \\pi f t + \\phi)"
}, // Cosine wave function
{
    id: "formula4023",
    formula: "dB = 10 \\log_{10} \\left( \\frac{P}{P_0} \\right)"
}, // Decibel formula
{
    id: "formula4123",
    formula: "A = \\frac{1}{2} L m v^2"
}, // Energy in a vibrating string
{
    id: "formula4223",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula4323",
    formula: "C = \\sum_{n=0}^{N-1} x_n"
}, // Sum of discrete signal values
{
    id: "formula4423",
    formula: "T = \\frac{2 L}{v}"
}, // Period of a standing wave on a string
{
    id: "formula4523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula4623",
    formula: "P = A \\cdot \\omega"
}, // Power in a harmonic oscillator
{
    id: "formula4723",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a vibrating particle
{
    id: "formula4823",
    formula: "F = -kx"
}, // Hooke's Law for spring systems
{
    id: "formula4923",
    formula: "f = f_0 \\cdot 2^{n/12}"
}, // Harmonic series frequency formula
{
    id: "formula5023",
    formula: "\\Delta f = \\frac{1}{T}"
}, // Frequency resolution in Fourier Transform
{
    id: "formula5123",
    formula: "I = \\int_{0}^{T} |x(t)|^2 dt"
}, // Energy of a signal over time
{
    id: "formula5223",
    formula: "T = \\frac{1}{f_0}"
}, // Period of a simple sine wave
{
    id: "formula5323",
    formula: "f_{max} = 2 f_{fundamental}"
}, // Maximum frequency in harmonic series
{
    id: "formula5423",
    formula: "p = \\frac{F}{A}"
}, // Pressure formula (Force per unit area)
{
    id: "formula5523",
    formula: "\\lambda = \\frac{c}{f}"
}, // Wavelength formula for waves
{
    id: "formula5623",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonant frequency of LC circuit
{
    id: "formula5723",
    formula: "T = \\frac{2L}{g}"
}, // Time period of a simple pendulum
{
    id: "formula5823",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula5923",
    formula: "v = \\lambda f"
}, // Wave velocity formula
{
    id: "formula6023",
    formula: "Q = \\frac{v}{\\rho}"
}, // Volume flow rate formula
{
    id: "formula6123",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula6223",
    formula: "v = \\sqrt{\\frac{T}{\\mu}}"
}, // Wave velocity on a string
{
    id: "formula6323",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula6423",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula6523",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of time period
{
    id: "formula6623",
    formula: "x(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal signal function
{
    id: "formula6723",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula6823",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula6923",
    formula: "R = \\frac{\\rho L}{A}"
}, // Resistance formula (Ohm's law)
{
    id: "formula7023",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula7123",
    formula: "v = \\sqrt{\\frac{E}{\\rho}}"
}, // Speed of sound in a medium
{
    id: "formula7223",
    formula: "F = \\frac{1}{2} k x^2"
}, // Potential energy stored in a spring
{
    id: "formula7323",
    formula: "f(t) = \\int_{0}^{\\infty} X(w) e^{i w t} dw"
}, // Inverse Fourier transform
{
    id: "formula7423",
    formula: "x(t) = \\sum_{n=-\\infty}^{\\infty} X[k] e^{i \\frac{2\\pi}{N} k n}"
}, // Inverse DFT formula
{
    id: "formula7523",
    formula: "X(w) = \\int_{-\\infty}^{\\infty} x(t) e^{-i w t} dt"
} // Fourier transform of x(t)
{
    id: "formula123",
    formula: "f = f_0 \\cdot 2^{\\frac{n}{12}}"
}, // Frequency formula for equal temperament
{
    id: "formula223",
    formula: "X_k=\\sum_{n=0}^{N-1}x_n\\cdote^{-i \\frac{2\\pi}{N} k n}"
}, // DFT
{
    id: "formula323",
    formula: "C = A + B"
}, // Chord notation: C is the sum of A and B
{
    id: "formula423",
    formula: "A_4 = 440 \\text{ Hz}"
}, // Standard tuning for A4
{
    id: "formula523",
    formula: "f_n = f_0 \\cdot 2^{n/12}"
}, // Frequency formula for the nth note in equal temperament
{
    id: "formula623",
    formula: "P5 = 7 \\text{ semitones}"
}, // Perfect Fifth interval
{
    id: "formula723",
    formula: "M3 = 4 \\text{ semitones}"
}, // Major Third interval
{
    id: "formula823",
    formula: "m3 = 3 \\text{ semitones}"
}, // Minor Third interval
{
    id: "formula923",
    formula: "d3 = 2 \\text{ semitones}"
}, // Diminished Third interval
{
    id: "formula1023",
    formula: "M7 = 11 \\text{ semitones}"
}, // Major Seventh interval
{
    id: "formula1123",
    formula: "m7 = 10 \\text{ semitones}"
}, // Minor Seventh interval
{
    id: "formula1223",
    formula: "I = \\{ 1, 3, 5 \\}"
}, // Major chord (root, major third, perfect fifth)
{
    id: "formula1323",
    formula: "ii = \\{ 2, 4, 6 \\}"
}, // Minor chord in second inversion
{
    id: "formula1423",
    formula: "IV = \\{ 4, 6, 8 \\}"
}, // Major chord in fourth inversion
{
    id: "formula1523",
    formula: "V = \\{ 5, 7, 9 \\}"
}, // Dominant chord (perfect fifth, major third, minor seventh)
{
    id: "formula1623",
    formula: "T = \\sum_{n=0}^{N-1} \\left| x_n \\right|^2"
}, // Signal power formula
{
    id: "formula1723",
    formula: "R = \\int_{0}^{T} x(t) \\cdot y(t) \, dt"
}, // Cross-correlation formula
{
    id: "formula1823",
    formula: "A = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula1923",
    formula: "Q = m c \\Delta T"
}, // Heat energy formula
{
    id: "formula2023",
    formula: "f(t) = A \\sin(2 \\pi f t + \\phi)"
}, // Sine wave function
{
    id: "formula2123",
    formula: "F(s) = \\mathcal{L} \\{ f(t) \\}"
}, // Laplace transform
{
    id: "formula2223",
    formula: "L^{-1}\\{ F(s) \\} = f(t)"
}, // Inverse Laplace transform
{
    id: "formula2323",
    formula: "X(w) = \\int_{-\\infty}^{\\infty} x(t) e^{-i w t} dt"
}, // Fourier Transform
{
    id: "formula2423",
    formula: "X(w) = \\sum_{n=-\\infty}^{\\infty} x[n] e^{-i w n}"
}, // Discrete Fourier Transform for discrete signals
{
    id: "formula2523",
    formula: "x(t) = \\sum_{n=-\\infty}^{\\infty} X[k] e^{i \\frac{2\\pi}{N} k n}"
}, // Inverse DFT
{
    id: "formula2623",
    formula: "Y(f) = \\mathcal{F} \\{ x(t) \\}"
}, // Fourier transform notation
{
    id: "formula2723",
    formula: "S = \\int_{-\\infty}^{\\infty} |X(f)|^2 df"
}, // Spectral energy formula
{
    id: "formula2823",
    formula: "BPM = 60 \\cdot \\frac{1}{T}"
}, // Beats per minute (BPM) formula
{
    id: "formula2923",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency for an RC circuit
{
    id: "formula3023",
    formula: "f_{harmonic} = n \\cdot f_0"
}, // Harmonics in a sound wave
{
    id: "formula3123",
    formula: "f_{fundamental} = f_0"
}, // Fundamental frequency
{
    id: "formula3223",
    formula: "N = \\frac{c}{f_{sound}}"
}, // Number of harmonics
{
    id: "formula3323",
    formula: "d = v \\cdot t"
}, // Distance formula for sound waves
{
    id: "formula3423",
    formula: "v = \\sqrt{\\frac{E}{\\rho}}"
}, // Velocity formula for sound in a medium
{
    id: "formula3523",
    formula: "p(t) = A \\sin(\\omega t + \\phi)"
}, // Pressure wave function for sound
{
    id: "formula3623",
    formula: "T = \\frac{1}{f}"
}, // Period of a waveform
{
    id: "formula3723",
    formula: "f = \\frac{1}{T}"
} // Frequency formula
{
    id: "formula60123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula60223",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula60323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wave velocity and wavelength
{
    id: "formula60423",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula60523",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula60623",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula60723",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula60823",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula60923",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula61023",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula61123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula61223",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength and velocity
{
    id: "formula61323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula61423",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula61523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula61623",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula61723",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula61823",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula61923",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula62023",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula62123",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula62223",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula62323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula62423",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula62523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula62623",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula62723",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula62823",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula62923",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula63023",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula63123",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula63223",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula63323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula63423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula63523",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula63623",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula63723",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula63823",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula63923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength and velocity
{
    id: "formula64023",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula64123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula64223",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula64323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula64423",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula64523",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula64623",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula64723",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula64823",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula64923",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula65023",
    formula: "P = \\frac{V^2}{R}"
} // Power dissipated in a resistor
{
    id: "formula55123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula55223",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula55323",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula55423",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula55523",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula55623",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula55723",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula55823",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula55923",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula56023",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula56123",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula56223",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula56323",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula56423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula56523",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula56623",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula56723",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula56823",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency of a string
{
    id: "formula56923",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula57023",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula57123",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula57223",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula57323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula57423",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula57523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula57623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula57723",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula57823",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula57923",
    formula: "P = F v"
}, // Power formula for force and velocity
{
    id: "formula58023",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula58123",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula58223",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula58323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula58423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula58523",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula58623",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula58723",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula58823",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula58923",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wave velocity and wavelength
{
    id: "formula59023",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula59123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula59223",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula59323",
    formula: "P = F v"
}, // Power as the product of force and velocity
{
    id: "formula59423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula59523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula59623",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula59723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula59823",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula59923",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula60023",
    formula: "P = F v"
} // Power as force times velocity

{
    id: "formula50123",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula50223",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula50323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency and wavelength relationship
{
    id: "formula50423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula50523",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula50623",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula50723",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula50823",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula50923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula51023",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula51123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength and velocity
{
    id: "formula51223",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula51323",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula51423",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula51523",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy
{
    id: "formula51623",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula51723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula51823",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula51923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula52023",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula52123",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula52223",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula52323",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula52423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength and velocity
{
    id: "formula52523",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula52623",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula52723",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula52823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula52923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula53023",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula53123",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula53223",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula53323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency and wavelength relationship
{
    id: "formula53423",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula53523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula53623",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Fundamental frequency for a vibrating string
{
    id: "formula53723",
    formula: "P = F v"
}, // Power formula in terms of force and velocity
{
    id: "formula53823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula53923",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula54023",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula54123",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula54223",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wavelength
{
    id: "formula54323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula54423",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula54523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency and wavelength relationship
{
    id: "formula54623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula54723",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula54823",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula54923",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula55023",
    formula: "E = \\frac{1}{2} m v^2"
} // Kinetic energy equation

{
    id: "formula45123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula45223",
    formula: "P = F v"
}, // Power is force times velocity
{
    id: "formula45323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula45423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula45523",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula45623",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Maximum velocity in SHM
{
    id: "formula45723",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula45823",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula45923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula46023",
    formula: "f_n = n f_1"
}, // Harmonics for vibrating strings
{
    id: "formula46123",
    formula: "v = \\lambda f"
}, // Wave velocity in terms of frequency and wavelength
{
    id: "formula46223",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula46323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength and velocity
{
    id: "formula46423",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula46523",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula46623",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula46723",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Maximum velocity in SHM
{
    id: "formula46823",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula46923",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula47023",
    formula: "f_n = n f_1"
}, // Harmonics in a string vibration
{
    id: "formula47123",
    formula: "P = F v"
}, // Power formula: force times velocity
{
    id: "formula47223",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula47323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency and wavelength relationship
{
    id: "formula47423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula47523",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula47623",
    formula: "v = \\sqrt{\\frac{T}{\\mu}}"
}, // Speed of wave on a string
{
    id: "formula47723",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency in terms of wave speed and wavelength
{
    id: "formula47823",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula47923",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula48023",
    formula: "f_n = n f_1"
}, // Harmonics of a string vibrating
{
    id: "formula48123",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula48223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula48323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of velocity and wavelength
{
    id: "formula48423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula48523",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula48623",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula48723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula48823",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Maximum velocity in SHM
{
    id: "formula48923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula49023",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula49123",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula49223",
    formula: "f_n = n f_1"
}, // Harmonics for vibrating strings
{
    id: "formula49323",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula49423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula49523",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Maximum velocity in SHM
{
    id: "formula49623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula49723",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula49823",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula49923",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula50023",
    formula: "f = \\frac{v}{\\lambda}"
} // Frequency-wavelength relation for waves

{
    id: "formula39523",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula39623",
    formula: "v = \\sqrt{\\frac{T}{\\mu}}"
}, // Speed of wave on a string
{
    id: "formula39723",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula39823",
    formula: "E = \\frac{1}{2} k x^2"
}, // Potential energy stored in a spring
{
    id: "formula39923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula40023",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula40123",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula40223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula40323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula40423",
    formula: "I = m r^2"
}, // Moment of inertia for point mass
{
    id: "formula40523",
    formula: "P = \\frac{F}{A}"
}, // Pressure as force per area
{
    id: "formula40623",
    formula: "f_n = n f_1"
}, // Harmonics formula for a vibrating string
{
    id: "formula40723",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of the period
{
    id: "formula40823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula40923",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Maximum velocity in SHM
{
    id: "formula41023",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula41123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula41223",
    formula: "f_n = n f_1"
}, // Harmonics of a string vibrating
{
    id: "formula41323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula41423",
    formula: "P = F v"
}, // Power formula: force times velocity
{
    id: "formula41523",
    formula: "v = \\frac{v_0}{\\lambda}"
}, // Velocity-wavelength relationship
{
    id: "formula41623",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula41723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula41823",
    formula: "I = \\frac{V}{R}"
}, // Ohm's Law for current
{
    id: "formula41923",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency for a vibrating string
{
    id: "formula42023",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula42123",
    formula: "T = \\frac{2L}{v}"
}, // Time period of a standing wave
{
    id: "formula42223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula42323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula42423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wave velocity and wavelength
{
    id: "formula42523",
    formula: "I = m r^2"
}, // Moment of inertia for a point mass
{
    id: "formula42623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula42723",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula42823",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula42923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula43023",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relation
{
    id: "formula43123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength and wave speed
{
    id: "formula43223",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula43323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula43423",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Maximum velocity in SHM
{
    id: "formula43523",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula43623",
    formula: "f_n = n f_1"
}, // Harmonics formula for a string
{
    id: "formula43723",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula43823",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula43923",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wavelength and velocity
{
    id: "formula44023",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula44123",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula44223",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula44323",
    formula: "f_n = n f_1"
}, // Harmonics in a string vibration
{
    id: "formula44423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula44523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula44623",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula44723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation
{
    id: "formula44823",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula44923",
    formula: "f_n = n f_1"
}, // Harmonics formula for a vibrating string
{
    id: "formula45023",
    formula: "P = IV"
} // Power formula for electrical circuits

{
    id: "formula32123",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula32223",
    formula: "v = \\lambda f"
}, // Wave velocity formula
{
    id: "formula32323",
    formula: "P = \\frac{F}{A}"
}, // Pressure formula
{
    id: "formula32423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula32523",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula32623",
    formula: "v = \\sqrt{\\frac{T}{\\mu}}"
}, // Speed of wave on a string
{
    id: "formula32723",
    formula: "P = F v"
}, // Power is force times velocity
{
    id: "formula32823",
    formula: "I = \\frac{V}{R}"
}, // Ohm's law for current
{
    id: "formula32923",
    formula: "f = \\frac{1}{T}"
}, // Frequency as the inverse of the period
{
    id: "formula33023",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula33123",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula33223",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula33323",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula33423",
    formula: "f_n = n f_1"
}, // Harmonic frequencies for a string
{
    id: "formula33523",
    formula: "P = F v"
}, // Power formula: force times velocity
{
    id: "formula33623",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula33723",
    formula: "f = \\frac{1}{T}"
}, // Frequency from period
{
    id: "formula33823",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula33923",
    formula: "a = - A \\omega^2 \\sin(\\omega t)"
}, // Acceleration in SHM
{
    id: "formula34023",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula34123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wave velocity and wavelength
{
    id: "formula34223",
    formula: "f_n = n f_1"
}, // Harmonics of a string vibration
{
    id: "formula34323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula34423",
    formula: "T = \\frac{1}{f}"
}, // Time period of oscillation
{
    id: "formula34523",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula34623",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency equation
{
    id: "formula34723",
    formula: "f_n = n f_1"
}, // Harmonics formula for a string
{
    id: "formula34823",
    formula: "v = \\sqrt{\\frac{T}{\\mu}}"
}, // Speed of wave on a string
{
    id: "formula34923",
    formula: "E = \\frac{1}{2} k x^2"
}, // Potential energy in a spring
{
    id: "formula35023",
    formula: "P = F v"
}, // Power is force times velocity
{
    id: "formula35123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula35223",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula35323",
    formula: "T = \\frac{2L}{v}"
}, // Time period of a standing wave
{
    id: "formula35423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor in an electrical circuit
{
    id: "formula35523",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula35623",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula35723",
    formula: "P = F v"
}, // Power formula
{
    id: "formula35823",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Velocity in SHM
{
    id: "formula35923",
    formula: "I = m r^2"
}, // Moment of inertia for point mass
{
    id: "formula36023",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency in terms of wave velocity
{
    id: "formula36123",
    formula: "T = \\frac{1}{f}"
}, // Time period of oscillation
{
    id: "formula36223",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula36323",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula36423",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula36523",
    formula: "a = - A \\omega^2 \\sin(\\omega t)"
}, // Acceleration in SHM
{
    id: "formula36623",
    formula: "f_n = n f_1"
}, // Harmonics for a string vibrating
{
    id: "formula36723",
    formula: "v = \\lambda f"
}, // Wave velocity formula
{
    id: "formula36823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula36923",
    formula: "f = \\frac{1}{T}"
}, // Frequency as the inverse of the period
{
    id: "formula37023",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula37123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency
{
    id: "formula37223",
    formula: "I = \\frac{V}{R}"
}, // Ohm's law for current
{
    id: "formula37323",
    formula: "E = \\frac{1}{2} k x^2"
}, // Potential energy in a spring
{
    id: "formula37423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula37523",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation
{
    id: "formula37623",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula37723",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula37823",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula37923",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of velocity and wavelength
{
    id: "formula38023",
    formula: "P = F v"
}, // Power is force times velocity
{
    id: "formula38123",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula38223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula38323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation
{
    id: "formula38423",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Maximum velocity in SHM
{
    id: "formula38523",
    formula: "T = \\frac{2L}{v}"
}, // Time period of a standing wave
{
    id: "formula38623",
    formula: "f = \\frac{1}{T}"
}, // Frequency as the inverse of the period
{
    id: "formula38723",
    formula: "f_n = n f_1"
}, // Harmonics in a string vibration
{
    id: "formula38823",
    formula: "P = F v"
}, // Power formula: force times velocity
{
    id: "formula38923",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula39023",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula39123",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula39223",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula39323",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Maximum velocity in SHM
{
    id: "formula39423",
    formula: "E = \\frac{1}{2} C V^2"
} // Energy stored in a capacitor

{
    id: "formula25723",
    formula: "P = F v"
}, // Power is force times velocity
{
    id: "formula25823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation
{
    id: "formula25923",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula26023",
    formula: "f_{max} = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Maximum frequency of a vibrating string
{
    id: "formula26123",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Velocity in SHM
{
    id: "formula26223",
    formula: "a = - A \\omega^2 \\sin(\\omega t)"
}, // Acceleration in SHM
{
    id: "formula26323",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula26423",
    formula: "T = \\frac{1}{f}"
}, // Period of a wave
{
    id: "formula26523",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula26623",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula26723",
    formula: "I = \\frac{V}{R}"
}, // Ohm's law for current
{
    id: "formula26823",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula26923",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula27023",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula27123",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula27223",
    formula: "v = \\sqrt{\\frac{T}{\\mu}}"
}, // Wave speed on a string
{
    id: "formula27323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula27423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave velocity and wavelength
{
    id: "formula27523",
    formula: "I = m r^2"
}, // Moment of inertia for point mass
{
    id: "formula27623",
    formula: "P = \\frac{F}{A}"
}, // Pressure as force per unit area
{
    id: "formula27723",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula27823",
    formula: "f = \\frac{1}{T}"
}, // Frequency as the inverse of period
{
    id: "formula27923",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula28023",
    formula: "f = f_0 \\cdot 2^n"
}, // Harmonics frequency in a vibrating string
{
    id: "formula28123",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula28223",
    formula: "I = \\frac{V}{R}"
}, // Ohm's Law for current
{
    id: "formula28323",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula28423",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Velocity in SHM
{
    id: "formula28523",
    formula: "E = \\frac{1}{2} k x^2"
}, // Potential energy in a spring
{
    id: "formula28623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula28723",
    formula: "f = \\frac{1}{T}"
}, // Frequency as the inverse of the period
{
    id: "formula28823",
    formula: "P = IV"
}, // Electrical power formula
{
    id: "formula28923",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the derivative of position
{
    id: "formula29023",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula29123",
    formula: "P = F v"
}, // Power formula: Force times velocity
{
    id: "formula29223",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency
{
    id: "formula29323",
    formula: "I = m r^2"
}, // Moment of inertia for a point mass
{
    id: "formula29423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula29523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula29623",
    formula: "f = \\frac{1}{T}"
}, // Frequency as the inverse of period
{
    id: "formula29723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency
{
    id: "formula29823",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula29923",
    formula: "v = \\sqrt{\\frac{T}{\\mu}}"
}, // Wave speed on a string
{
    id: "formula30023",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a pendulum
{
    id: "formula30123",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula30223",
    formula: "a = \\frac{F}{m}"
}, // Newton's second law of motion
{
    id: "formula30323",
    formula: "P = F v"
}, // Power is force times velocity
{
    id: "formula30423",
    formula: "I = \\frac{V}{R}"
}, // Ohm's law
{
    id: "formula30523",
    formula: "f_{max} = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Maximum frequency of a string
{
    id: "formula30623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wavelength
{
    id: "formula30723",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Velocity in SHM
{
    id: "formula30823",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency equation
{
    id: "formula30923",
    formula: "P = IV"
}, // Power formula in electrical circuits
{
    id: "formula31023",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula31123",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a pendulum
{
    id: "formula31223",
    formula: "v = \\sqrt{\\frac{T}{\\mu}}"
}, // Speed of wave on a string
{
    id: "formula31323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula31423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula31523",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency and wavelength relationship
{
    id: "formula31623",
    formula: "I = m r^2"
}, // Moment of inertia formula
{
    id: "formula31723",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength and wave speed
{
    id: "formula31823",
    formula: "E = \\frac{1}{2} k x^2"
}, // Potential energy in a spring
{
    id: "formula31923",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula32023",
    formula: "v_{max} = A \\omega"
} // Maximum velocity in SHM

{
    id: "formula20023",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of velocity and wavelength
{
    id: "formula20123",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM (Simple Harmonic Motion)
{
    id: "formula20223",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula20323",
    formula: "P = F v"
}, // Power is force times velocity
{
    id: "formula20423",
    formula: "E = \\frac{1}{2} k x^2"
}, // Potential energy in a spring
{
    id: "formula20523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula20623",
    formula: "P = \\frac{1}{2} m v^2"
}, // Kinetic energy
{
    id: "formula20723",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula20823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy in motion
{
    id: "formula20923",
    formula: "V = IR"
}, // Ohm’s Law
{
    id: "formula21023",
    formula: "C = \\frac{Q}{V}"
}, // Capacitance formula
{
    id: "formula21123",
    formula: "f = f_0 \\cdot 2^n"
}, // Frequency doubling in harmonics
{
    id: "formula21223",
    formula: "T = \\frac{2L}{v}"
}, // Time period for a standing wave
{
    id: "formula21323",
    formula: "a = \\frac{F}{m}"
}, // Newton's second law (acceleration)
{
    id: "formula21423",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of period
{
    id: "formula21523",
    formula: "p = \\frac{F}{A}"
}, // Pressure formula
{
    id: "formula21623",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula21723",
    formula: "I = \\int_{0}^{T} x(t) dt"
}, // Total energy of a signal over time
{
    id: "formula21823",
    formula: "P = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula21923",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula22023",
    formula: "P = IV"
}, // Electrical power formula
{
    id: "formula22123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency equation
{
    id: "formula22223",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula for AC circuits
{
    id: "formula22323",
    formula: "f_{max} = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Maximum frequency of a string
{
    id: "formula22423",
    formula: "v = \\sqrt{\\frac{T}{\\mu}}"
}, // Wave speed on a string
{
    id: "formula22523",
    formula: "P = \\frac{F}{A}"
}, // Pressure as force per area
{
    id: "formula22623",
    formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula22723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula22823",
    formula: "a = \\frac{v}{t}"
}, // Acceleration from velocity and time
{
    id: "formula22923",
    formula: "P = \\frac{V^2}{R}"
}, // Power in a resistive circuit
{
    id: "formula23023",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula23123",
    formula: "a = - A \\omega^2 \\sin(\\omega t)"
}, // Acceleration in SHM
{
    id: "formula23223",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula23323",
    formula: "f_n = n f_1"
}, // Harmonic frequency for a string
{
    id: "formula23423",
    formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a string vibrating in its fundamental mode
{
    id: "formula23523",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Velocity in SHM
{
    id: "formula23623",
    formula: "I = m r^2"
}, // Moment of inertia of a point mass
{
    id: "formula23723",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal function for displacement
{
    id: "formula23823",
    formula: "P = F v"
}, // Power formula
{
    id: "formula23923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency in terms of wavelength and speed of sound
{
    id: "formula24023",
    formula: "v = \\lambda f"
}, // Wave velocity
{
    id: "formula24123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula24223",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula24323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula24423",
    formula: "P = \\frac{F}{A}"
}, // Pressure formula
{
    id: "formula24523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency equation
{
    id: "formula24623",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula24723",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula24823",
    formula: "f_{max} = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a string vibrating
{
    id: "formula24923",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Speed of wave in a medium
{
    id: "formula25023",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula25123",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula25223",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula25323",
    formula: "P = IV"
}, // Electrical power formula
{
    id: "formula25423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula25523",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula25623",
    formula: "a = - A \\omega^2 \\sin(\\omega t)"
}, // Acceleration in

{
    id: "formula12523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Relationship between frequency and wavelength in vacuum
{
    id: "formula12623",
    formula: "v = \\sqrt{g L}"
}, // Speed of wave on a string under tension
{
    id: "formula12723",
    formula: "f = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}"
}, // Frequency of a mass-spring system
{
    id: "formula12823",
    formula: "T = \\frac{1}{f}"
}, // Time period of oscillation
{
    id: "formula12923",
    formula: "f = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula13023",
    formula: "P = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula13123",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula13223",
    formula: "f = \\frac{1}{T}"
}, // Frequency from period
{
    id: "formula13323",
    formula: "v = \\lambda f"
}, // Wave velocity equation
{
    id: "formula13423",
    formula: "I = m r^2"
}, // Moment of inertia of a point mass
{
    id: "formula13523",
    formula: "F = -kx"
}, // Hooke’s law for spring force
{
    id: "formula13623",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, // Cosine wave displacement equation
{
    id: "formula13723",
    formula: "a = \\frac{F}{m}"
}, // Newton’s second law of motion
{
    id: "formula13823",
    formula: "P = Fv"
}, // Power as force times velocity
{
    id: "formula13923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula14023",
    formula: "x(t) = A e^{i \\omega t}"
}, // Complex exponential form of a wave
{
    id: "formula14123",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal displacement equation
{
    id: "formula14223",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in harmonic motion
{
    id: "formula14323",
    formula: "a_{max} = A \\omega^2"
}, // Maximum acceleration in SHM
{
    id: "formula14423",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula14523",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the rate of change of position
{
    id: "formula14623",
    formula: "F_{spring} = -kx"
}, // Spring force from Hooke’s law
{
    id: "formula14723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor (Ohm’s law)
{
    id: "formula14823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula14923",
    formula: "v = \\sqrt{gL}"
}, // Speed of a wave on a string
{
    id: "formula15023",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula15123",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula15223",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a string vibrating in its fundamental mode
{
    id: "formula15323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula15423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula15523",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula15623",
    formula: "I = \\int_0^T x(t) dt"
}, // Total energy of a signal over time
{
    id: "formula15723",
    formula: "F = \\mu m g"
}, // Force due to friction on a mass
{
    id: "formula15823",
    formula: "f = \\frac{1}{2 L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula15923",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an RLC circuit
{
    id: "formula16023",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Speed of light in a medium
{
    id: "formula16123",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave in a medium
{
    id: "formula16223",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula16323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula16423",
    formula: "T = \\frac{1}{f}"
}, // Time period of a periodic signal
{
    id: "formula16523",
    formula: "f = \\frac{1}{T}"
}, // Frequency of a periodic signal
{
    id: "formula16623",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula16723",
    formula: "v = v_0 + at"
}, // Velocity with uniform acceleration
{
    id: "formula16823",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula16923",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula17023",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula17123",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula17223",
    formula: "I = m r^2"
}, // Moment of inertia for point mass
{
    id: "formula17323",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula17423",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, // Sum of discrete signal values
{
    id: "formula17523",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula17623",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula17723",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula17823",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy of a wave in a medium
{
    id: "formula17923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula18023",
    formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula18123",
    formula: "T = \\frac{1}{f}"
}, // Period from frequency
{
    id: "formula18223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula18323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula18423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula18523",
    formula: "v = \\frac{dx}{dt}"
}, // Rate of change of position
{
    id: "formula18623",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula18723",
    formula: "T = \\frac{2L}{v}"
}, // Time period of a standing wave
{
    id: "formula18823",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula18923",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation formula for RLC circuits
{
    id: "formula19023",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity of a wave
{
    id: "formula19123",
    formula: "I = \\frac{V}{R}"
}, // Ohm's Law for current
{
    id: "formula19223",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency equation for waves
{
    id: "formula19323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for electrical circuits
{
    id: "formula19423",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula19523",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula19623",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, // Sum of signal values
{
    id: "formula19723",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula19823",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula19923",
    formula: "E = \\frac{1}{2} C V^2"
} // Energy stored in a capacitor

{
    id: "formula7623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Relationship between frequency and wavelength
{
    id: "formula7723",
    formula: "v = v_0 + at"
}, // Velocity formula for uniformly accelerated motion
{
    id: "formula7823",
    formula: "v = \\sqrt{g L}"
}, // Velocity of a wave on a string under tension
{
    id: "formula7923",
    formula: "f = \\frac{1}{2 \\pi} \\sqrt{\\frac{k}{m}}"
}, // Natural frequency of a mass-spring system
{
    id: "formula8023",
    formula: "I = m r^2"
}, // Moment of inertia for a point mass
{
    id: "formula8123",
    formula: "F = \\mu N"
}, // Frictional force formula
{
    id: "formula8223",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula8323",
    formula: "P = \\frac{F}{A}"
}, // Pressure formula (Force per unit area)
{
    id: "formula8423",
    formula: "f_n = n f_1"
}, // Harmonics formula for string vibrations
{
    id: "formula8523",
    formula: "f(t) = A e^{i \\omega t}"
}, // Exponential function representation of a wave
{
    id: "formula8623",
    formula: "F_{spring} = -k x"
}, // Hooke's Law for spring force
{
    id: "formula8723",
    formula: "v = \\frac{2 d}{t}"
}, // Average velocity formula
{
    id: "formula8823",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula8923",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula9023",
    formula: "I = \\int_0^T x(t) dt"
}, // Total energy of a signal over time
{
    id: "formula9123",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula9223",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Speed of wave in a medium
{
    id: "formula9323",
    formula: "P = V^2 / R"
}, // Power dissipated by a resistor in an electrical circuit
{
    id: "formula9423",
    formula: "E_{cap} = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula9523",
    formula: "P = \\frac{1}{2} m v^2"
}, // Power of a harmonic oscillator
{
    id: "formula9623",
    formula: "f_{res} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonance frequency of an LC circuit
{
    id: "formula9723",
    formula: "F = \\mu m g"
}, // Force due to friction on a mass
{
    id: "formula9823",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal function for displacement in a wave
{
    id: "formula9923",
    formula: "v = \\lambda f"
}, // Wave velocity formula
{
    id: "formula10023",
    formula: "R = \\frac{\\rho L}{A}"
}, // Resistance formula
{
    id: "formula10123",
    formula: "V = I R"
}, // Ohm's Law for voltage
{
    id: "formula10223",
    formula: "P = I V"
}, // Electrical power formula
{
    id: "formula10323",
    formula: "A_{circ} = \\pi r^2"
}, // Area of a circle
{
    id: "formula10423",
    formula: "C = 2 \\pi r"
}, // Circumference of a circle
{
    id: "formula10523",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in simple harmonic motion
{
    id: "formula10623",
    formula: "a_{max} = A \\omega^2"
}, // Maximum acceleration in SHM
{
    id: "formula10723",
    formula: "T = \\frac{2\\pi}{\\omega}"
}, // Time period from angular frequency
{
    id: "formula10823",
    formula: "I = \\frac{1}{2} m r^2"
}, // Moment of inertia for a solid disc
{
    id: "formula10923",
    formula: "P_{max} = \\frac{1}{2} \\rho A v^3"
}, // Maximum power of a wave in a medium
{
    id: "formula11023",
    formula: "f = \\frac{1}{2 L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula11123",
    formula: "I = I_0 e^{-\\alpha x}"
}, // Intensity attenuation in a medium
{
    id: "formula11223",
    formula: "f_n = \\frac{n}{2L} \\sqrt{T / \\mu}"
}, // Frequency of the nth harmonic
{
    id: "formula11323",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the rate of change of displacement
{
    id: "formula11423",
    formula: "T = \\frac{1}{f}"
}, // Period of oscillation in SHM
{
    id: "formula11523",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Kinetic energy of a particle in a wave
{
    id: "formula11623",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in a wave
{
    id: "formula11723",
    formula: "a = -\\omega^2 x"
}, // Acceleration in simple harmonic motion
{
    id: "formula11823",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula11923",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula12023",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an electrical circuit with inductance
{
    id: "formula12123",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula12223",
    formula: "f_0 = \\frac{1}{2 \\pi} \\sqrt{\\frac{k}{m}}"
}, // Natural frequency of a mass-spring system
{
    id: "formula12323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula in an electrical circuit
{
    id: "formula12423",
    formula: "X(w) = \\int_{-\\infty}^{\\infty} x(t) e^{-i w t} dt"
} // Fourier Transform

{
    id: "formula20023",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of velocity and wavelength
{
    id: "formula20123",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM (Simple Harmonic Motion)
{
    id: "formula20223",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula20323",
    formula: "P = F v"
}, // Power is force times velocity
{
    id: "formula20423",
    formula: "E = \\frac{1}{2} k x^2"
}, // Potential energy in a spring
{
    id: "formula20523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula20623",
    formula: "P = \\frac{1}{2} m v^2"
}, // Kinetic energy
{
    id: "formula20723",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula20823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy in motion
{
    id: "formula20923",
    formula: "V = IR"
}, // Ohm’s Law
{
    id: "formula21023",
    formula: "C = \\frac{Q}{V}"
}, // Capacitance formula
{
    id: "formula21123",
    formula: "f = f_0 \\cdot 2^n"
}, // Frequency doubling in harmonics
{
    id: "formula21223",
    formula: "T = \\frac{2L}{v}"
}, // Time period for a standing wave
{
    id: "formula21323",
    formula: "a = \\frac{F}{m}"
}, // Newton's second law (acceleration)
{
    id: "formula21423",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of period
{
    id: "formula21523",
    formula: "p = \\frac{F}{A}"
}, // Pressure formula
{
    id: "formula21623",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula21723",
    formula: "I = \\int_{0}^{T} x(t) dt"
}, // Total energy of a signal over time
{
    id: "formula21823",
    formula: "P = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula21923",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula22023",
    formula: "P = IV"
}, // Electrical power formula
{
    id: "formula22123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency equation
{
    id: "formula22223",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula for AC circuits
{
    id: "formula22323",
    formula: "f_{max} = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Maximum frequency of a string
{
    id: "formula22423",
    formula: "v = \\sqrt{\\frac{T}{\\mu}}"
}, // Wave speed on a string
{
    id: "formula22523",
    formula: "P = \\frac{F}{A}"
}, // Pressure as force per area
{
    id: "formula22623",
    formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula22723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula22823",
    formula: "a = \\frac{v}{t}"
}, // Acceleration from velocity and time
{
    id: "formula22923",
    formula: "P = \\frac{V^2}{R}"
}, // Power in a resistive circuit
{
    id: "formula23023",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula23123",
    formula: "a = - A \\omega^2 \\sin(\\omega t)"
}, // Acceleration in SHM
{
    id: "formula23223",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula23323",
    formula: "f_n = n f_1"
}, // Harmonic frequency for a string
{
    id: "formula23423",
    formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a string vibrating in its fundamental mode
{
    id: "formula23523",
    formula: "v = A \\omega \\cos(\\omega t)"
}, // Velocity in SHM
{
    id: "formula23623",
    formula: "I = m r^2"
}, // Moment of inertia of a point mass
{
    id: "formula23723",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal function for displacement
{
    id: "formula23823",
    formula: "P = F v"
}, // Power formula
{
    id: "formula23923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency in terms of wavelength and speed of sound
{
    id: "formula24023",
    formula: "v = \\lambda f"
}, // Wave velocity
{
    id: "formula24123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula24223",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula24323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula24423",
    formula: "P = \\frac{F}{A}"
}, // Pressure formula
{
    id: "formula24523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency equation
{
    id: "formula24623",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula24723",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula24823",
    formula: "f_{max} = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a string vibrating
{
    id: "formula24923",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Speed of wave in a medium
{
    id: "formula25023",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula25123",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula25223",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula25323",
    formula: "P = IV"
}, // Electrical power formula
{
    id: "formula25423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula25523",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula25623",
    formula: "a = - A \\omega^2 \\sin(\\omega t)"
}, // Acceleration in

{
    id: "formula12523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Relationship between frequency and wavelength in vacuum
{
    id: "formula12623",
    formula: "v = \\sqrt{g L}"
}, // Speed of wave on a string under tension
{
    id: "formula12723",
    formula: "f = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}"
}, // Frequency of a mass-spring system
{
    id: "formula12823",
    formula: "T = \\frac{1}{f}"
}, // Time period of oscillation
{
    id: "formula12923",
    formula: "f = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula13023",
    formula: "P = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula13123",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula13223",
    formula: "f = \\frac{1}{T}"
}, // Frequency from period
{
    id: "formula13323",
    formula: "v = \\lambda f"
}, // Wave velocity equation
{
    id: "formula13423",
    formula: "I = m r^2"
}, // Moment of inertia of a point mass
{
    id: "formula13523",
    formula: "F = -kx"
}, // Hooke’s law for spring force
{
    id: "formula13623",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, // Cosine wave displacement equation
{
    id: "formula13723",
    formula: "a = \\frac{F}{m}"
}, // Newton’s second law of motion
{
    id: "formula13823",
    formula: "P = Fv"
}, // Power as force times velocity
{
    id: "formula13923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula14023",
    formula: "x(t) = A e^{i \\omega t}"
}, // Complex exponential form of a wave
{
    id: "formula14123",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal displacement equation
{
    id: "formula14223",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in harmonic motion
{
    id: "formula14323",
    formula: "a_{max} = A \\omega^2"
}, // Maximum acceleration in SHM
{
    id: "formula14423",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula14523",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the rate of change of position
{
    id: "formula14623",
    formula: "F_{spring} = -kx"
}, // Spring force from Hooke’s law
{
    id: "formula14723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor (Ohm’s law)
{
    id: "formula14823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula14923",
    formula: "v = \\sqrt{gL}"
}, // Speed of a wave on a string
{
    id: "formula15023",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula15123",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula15223",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a string vibrating in its fundamental mode
{
    id: "formula15323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula15423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula15523",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula15623",
    formula: "I = \\int_0^T x(t) dt"
}, // Total energy of a signal over time
{
    id: "formula15723",
    formula: "F = \\mu m g"
}, // Force due to friction on a mass
{
    id: "formula15823",
    formula: "f = \\frac{1}{2 L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula15923",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an RLC circuit
{
    id: "formula16023",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Speed of light in a medium
{
    id: "formula16123",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave in a medium
{
    id: "formula16223",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula16323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula16423",
    formula: "T = \\frac{1}{f}"
}, // Time period of a periodic signal
{
    id: "formula16523",
    formula: "f = \\frac{1}{T}"
}, // Frequency of a periodic signal
{
    id: "formula16623",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula16723",
    formula: "v = v_0 + at"
}, // Velocity with uniform acceleration
{
    id: "formula16823",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula16923",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula17023",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula17123",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula17223",
    formula: "I = m r^2"
}, // Moment of inertia for point mass
{
    id: "formula17323",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula17423",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, // Sum of discrete signal values
{
    id: "formula17523",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula17623",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula17723",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula17823",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy of a wave in a medium
{
    id: "formula17923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula18023",
    formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula18123",
    formula: "T = \\frac{1}{f}"
}, // Period from frequency
{
    id: "formula18223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula18323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula18423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula18523",
    formula: "v = \\frac{dx}{dt}"
}, // Rate of change of position
{
    id: "formula18623",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula18723",
    formula: "T = \\frac{2L}{v}"
}, // Time period of a standing wave
{
    id: "formula18823",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula18923",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation formula for RLC circuits
{
    id: "formula19023",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity of a wave
{
    id: "formula19123",
    formula: "I = \\frac{V}{R}"
}, // Ohm's Law for current
{
    id: "formula19223",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency equation for waves
{
    id: "formula19323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for electrical circuits
{
    id: "formula19423",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula19523",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula19623",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, // Sum of signal values
{
    id: "formula19723",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula19823",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula19923",
    formula: "E = \\frac{1}{2} C V^2"
} // Energy stored in a capacitor

{
    id: "formula7623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Relationship between frequency and wavelength
{
    id: "formula7723",
    formula: "v = v_0 + at"
}, // Velocity formula for uniformly accelerated motion
{
    id: "formula7823",
    formula: "v = \\sqrt{g L}"
}, // Velocity of a wave on a string under tension
{
    id: "formula7923",
    formula: "f = \\frac{1}{2 \\pi} \\sqrt{\\frac{k}{m}}"
}, // Natural frequency of a mass-spring system
{
    id: "formula8023",
    formula: "I = m r^2"
}, // Moment of inertia for a point mass
{
    id: "formula8123",
    formula: "F = \\mu N"
}, // Frictional force formula
{
    id: "formula8223",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula8323",
    formula: "P = \\frac{F}{A}"
}, // Pressure formula (Force per unit area)
{
    id: "formula8423",
    formula: "f_n = n f_1"
}, // Harmonics formula for string vibrations
{
    id: "formula8523",
    formula: "f(t) = A e^{i \\omega t}"
}, // Exponential function representation of a wave
{
    id: "formula8623",
    formula: "F_{spring} = -k x"
}, // Hooke's Law for spring force
{
    id: "formula8723",
    formula: "v = \\frac{2 d}{t}"
}, // Average velocity formula
{
    id: "formula8823",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula8923",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula9023",
    formula: "I = \\int_0^T x(t) dt"
}, // Total energy of a signal over time
{
    id: "formula9123",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula9223",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Speed of wave in a medium
{
    id: "formula9323",
    formula: "P = V^2 / R"
}, // Power dissipated by a resistor in an electrical circuit
{
    id: "formula9423",
    formula: "E_{cap} = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula9523",
    formula: "P = \\frac{1}{2} m v^2"
}, // Power of a harmonic oscillator
{
    id: "formula9623",
    formula: "f_{res} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonance frequency of an LC circuit
{
    id: "formula9723",
    formula: "F = \\mu m g"
}, // Force due to friction on a mass
{
    id: "formula9823",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal function for displacement in a wave
{
    id: "formula9923",
    formula: "v = \\lambda f"
}, // Wave velocity formula
{
    id: "formula10023",
    formula: "R = \\frac{\\rho L}{A}"
}, // Resistance formula
{
    id: "formula10123",
    formula: "V = I R"
}, // Ohm's Law for voltage
{
    id: "formula10223",
    formula: "P = I V"
}, // Electrical power formula
{
    id: "formula10323",
    formula: "A_{circ} = \\pi r^2"
}, // Area of a circle
{
    id: "formula10423",
    formula: "C = 2 \\pi r"
}, // Circumference of a circle
{
    id: "formula10523",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in simple harmonic motion
{
    id: "formula10623",
    formula: "a_{max} = A \\omega^2"
}, // Maximum acceleration in SHM
{
    id: "formula10723",
    formula: "T = \\frac{2\\pi}{\\omega}"
}, // Time period from angular frequency
{
    id: "formula10823",
    formula: "I = \\frac{1}{2} m r^2"
}, // Moment of inertia for a solid disc
{
    id: "formula10923",
    formula: "P_{max} = \\frac{1}{2} \\rho A v^3"
}, // Maximum power of a wave in a medium
{
    id: "formula11023",
    formula: "f = \\frac{1}{2 L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula11123",
    formula: "I = I_0 e^{-\\alpha x}"
}, // Intensity attenuation in a medium
{
    id: "formula11223",
    formula: "f_n = \\frac{n}{2L} \\sqrt{T / \\mu}"
}, // Frequency of the nth harmonic
{
    id: "formula11323",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the rate of change of displacement
{
    id: "formula11423",
    formula: "T = \\frac{1}{f}"
}, // Period of oscillation in SHM
{
    id: "formula11523",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Kinetic energy of a particle in a wave
{
    id: "formula11623",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in a wave
{
    id: "formula11723",
    formula: "a = -\\omega^2 x"
}, // Acceleration in simple harmonic motion
{
    id: "formula11823",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula11923",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula12023",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an electrical circuit with inductance
{
    id: "formula12123",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula12223",
    formula: "f_0 = \\frac{1}{2 \\pi} \\sqrt{\\frac{k}{m}}"
}, // Natural frequency of a mass-spring system
{
    id: "formula12323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula in an electrical circuit
{
    id: "formula12423",
    formula: "X(w) = \\int_{-\\infty}^{\\infty} x(t) e^{-i w t} dt"
} // Fourier Transform

{
    id: "formula60123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula60223",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula60323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula60423",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula60523",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula60623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula60723",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula60823",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength and velocity
{
    id: "formula60923",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula61023",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula61123",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula61223",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula61323",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula61423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula61523",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula61623",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula61723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula61823",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula61923",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula62023",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula62123",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula62223",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula62323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula62423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula62523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula62623",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula62723",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula62823",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula62923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula63023",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula63123",
    formula: "f_n = n f_1"
}, // Harmonics for vibrating strings
{
    id: "formula63223",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula63323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wave velocity and wavelength
{
    id: "formula63423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula63523",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Time period for a simple pendulum
{
    id: "formula63623",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula63723",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula63823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula63923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula64023",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula64123",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula64223",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula64323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula64423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula64523",
    formula: "f_n = n f_1"
}, // Harmonics in a string vibration
{
    id: "formula64623",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula64723",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula64823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula64923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula65023",
    formula: "f = \\frac{v}{\\lambda}"
} // Frequency-wavelength relation for waves

{
    id: "formula60123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula60223",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula60323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula60423",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula60523",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula60623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula60723",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula60823",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength and velocity
{
    id: "formula60923",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula61023",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula61123",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula61223",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula61323",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula61423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula61523",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula61623",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula61723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula61823",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula61923",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula62023",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula62123",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula62223",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula62323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula62423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula62523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula62623",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula62723",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula62823",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula62923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula63023",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula63123",
    formula: "f_n = n f_1"
}, // Harmonics for vibrating strings
{
    id: "formula63223",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula63323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wave velocity and wavelength
{
    id: "formula63423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula63523",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Time period for a simple pendulum
{
    id: "formula63623",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula63723",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula63823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula63923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula64023",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula64123",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula64223",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula64323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula64423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula64523",
    formula: "f_n = n f_1"
}, // Harmonics in a string vibration
{
    id: "formula64623",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula64723",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula64823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula64923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula65023",
    formula: "f = \\frac{v}{\\lambda}"
} // Frequency-wavelength relation for waves

{
    id: "formula56123",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula56223",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula56323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula56423",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula56523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula56623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula56723",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula56823",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula56923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula57023",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula57123",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula57223",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula57323",
    formula: "P = IV"
}, // Power formula for electrical circuits
{
    id: "formula57423",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula57523",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula57623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula57723",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula57823",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula57923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula58023",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula58123",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula58223",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula58323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula58423",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula58523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula58623",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula58723",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency and wavelength relation
{
    id: "formula58823",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula58923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula59023",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula59123",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula59223",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula59323",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula59423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula59523",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula59623",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula59723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula59823",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula59923",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula60023",
    formula: "f_n = n f_1"
} // Harmonics in a vibrating string

{
    id: "formula50123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency formula for waves
{
    id: "formula50223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula50323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula50423",
    formula: "P = I V"
}, // Electrical power formula
{
    id: "formula50523",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula50623",
    formula: "v = \\lambda f"
}, // Wave velocity formula
{
    id: "formula50723",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula50823",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula50923",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula51023",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency equation for waves
{
    id: "formula51123",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string or air column
{
    id: "formula51223",
    formula: "P = F v"
}, // Power in a mechanical system
{
    id: "formula51323",
    formula: "v = \\sqrt{gL}"
}, // Speed of wave in a string
{
    id: "formula51423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency and wavelength relationship
{
    id: "formula51523",
    formula: "X = \\frac{V}{I}"
}, // Impedance in an AC circuit
{
    id: "formula51623",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula51723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula51823",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of period
{
    id: "formula51923",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula52023",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipated in RLC circuits
{
    id: "formula52123",
    formula: "P = \\frac{V^2}{R}"
}, // Power in a resistor
{
    id: "formula52223",
    formula: "f_n = n f_1"
}, // Harmonics for vibrating strings or air columns
{
    id: "formula52323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency and wavelength relation
{
    id: "formula52423",
    formula: "v = \\lambda f"
}, // Wave velocity and frequency relation
{
    id: "formula52523",
    formula: "T = \\frac{1}{f}"
}, // Time period of oscillation
{
    id: "formula52623",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula52723",
    formula: "E = P t"
}, // Energy as the product of power and time
{
    id: "formula52823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency and wavelength
{
    id: "formula52923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength and wave speed
{
    id: "formula53023",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula53123",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula53223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula53323",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula53423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wavelength
{
    id: "formula53523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula53623",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula53723",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in harmonic motion
{
    id: "formula53823",
    formula: "P = F v"
}, // Power in mechanical systems
{
    id: "formula53923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula54023",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula54123",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula54223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula54323",
    formula: "P = I^2 R"
}, // Power formula from current and resistance
{
    id: "formula54423",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula54523",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula54623",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula54723",
    formula: "E = P t"
}, // Energy in terms of power and time
{
    id: "formula54823",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula54923",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula55023",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula55123",
    formula: "f_n = n f_1"
}, // Harmonics in vibrating strings
{
    id: "formula55223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula55323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of an object in motion
{
    id: "formula55423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wave speed and wavelength
{
    id: "formula55523",
    formula: "P = F v"
}, // Power in mechanical systems
{
    id: "formula55623",
    formula: "f_n = n f_1"
}, // Harmonics in vibrating strings
{
    id: "formula55723",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency in an RC circuit
{
    id: "formula55823",
    formula: "v = \\sqrt{g L}"
}, // Wave velocity in a string
{
    id: "formula55923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula56023",
    formula: "f_n = n f_1"
}, // Harmonics in vibrating strings

{
    id: "formula44723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula44823",
    formula: "P = F v"
}, // Power in mechanical systems
{
    id: "formula44923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula45023",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula45123",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in RLC circuits
{
    id: "formula45223",
    formula: "v = \\sqrt{g L}"
}, // Wave velocity on a string
{
    id: "formula45323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula45423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula45523",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula45623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency equation
{
    id: "formula45723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula45823",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency for a vibrating string
{
    id: "formula45923",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency for a string
{
    id: "formula46023",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula in AC circuits
{
    id: "formula46123",
    formula: "v = \\lambda f"
}, // Wave velocity and frequency relation
{
    id: "formula46223",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency in an RC circuit
{
    id: "formula46323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in RLC circuits
{
    id: "formula46423",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula46523",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula46623",
    formula: "P = I V"
}, // Electrical power formula
{
    id: "formula46723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed
{
    id: "formula46823",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency formula
{
    id: "formula46923",
    formula: "E = P t"
}, // Energy equation from power and time
{
    id: "formula47023",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string or air column
{
    id: "formula47123",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula47223",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as rate of change of displacement
{
    id: "formula47323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency formula for waves
{
    id: "formula47423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula (basic form)
{
    id: "formula47523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula47623",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency equation for wave phenomena
{
    id: "formula47723",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula47823",
    formula: "P = F v"
}, // Power as the product of force and velocity
{
    id: "formula47923",
    formula: "f_n = n f_1"
}, // Harmonics for vibrating systems
{
    id: "formula48023",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in RLC circuits
{
    id: "formula48123",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy (general formula)
{
    id: "formula48223",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula48323",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency for an RC circuit
{
    id: "formula48423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula48523",
    formula: "X = \\frac{V}{I}"
}, // Impedance in AC circuits
{
    id: "formula48623",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string or air column
{
    id: "formula48723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wavelength
{
    id: "formula48823",
    formula: "v = \\lambda f"
}, // Wave velocity and frequency relation
{
    id: "formula48923",
    formula: "P = I^2 R"
}, // Power dissipation formula in resistive circuits
{
    id: "formula49023",
    formula: "E = P t"
}, // Energy from power and time
{
    id: "formula49123",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of period
{
    id: "formula49223",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula49323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in RLC circuits
{
    id: "formula49423",
    formula: "P = F v"
}, // Mechanical power formula
{
    id: "formula49523",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula49623",
    formula: "v = \\sqrt{gL}"
}, // Wave velocity on a string under tension
{
    id: "formula49723",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC filter cutoff frequency
{
    id: "formula49823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula (basic form)
{
    id: "formula49923",
    formula: "f_n = n f_1"
}, // Harmonics in vibrating strings
{
    id: "formula50023",
    formula: "v = \\lambda f"
} // Wave velocity formula in terms of wavelength and frequency

{
    id: "formula38523",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula38623",
    formula: "P = I^2 R"
}, // Power dissipated in a resistor (alternate form)
{
    id: "formula38723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula38823",
    formula: "v = \\sqrt{gL}"
}, // Wave velocity on a string
{
    id: "formula38923",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula39023",
    formula: "P = F v"
}, // Mechanical power equation
{
    id: "formula39123",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula39223",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula39323",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonant frequency of an LC circuit
{
    id: "formula39423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula39523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength and wave speed
{
    id: "formula39623",
    formula: "I = \\frac{V}{R}"
}, // Ohm's law for current
{
    id: "formula39723",
    formula: "P = I V"
}, // Electrical power formula
{
    id: "formula39823",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula39923",
    formula: "X = \\frac{V}{I}"
}, // Impedance in AC circuits
{
    id: "formula40023",
    formula: "v = \\lambda f"
}, // Wave velocity formula
{
    id: "formula40123",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula40223",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency relation
{
    id: "formula40323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula40423",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency for RC circuits
{
    id: "formula40523",
    formula: "E = P t"
}, // Energy formula in terms of power and time
{
    id: "formula40623",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency for a vibrating string
{
    id: "formula40723",
    formula: "v = \\sqrt{gL}"
}, // Speed of a wave on a string
{
    id: "formula40823",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula40923",
    formula: "I = \\frac{V}{R}"
}, // Ohm's law for current
{
    id: "formula41023",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula41123",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonance frequency of an LC circuit
{
    id: "formula41223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula41323",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the derivative of position
{
    id: "formula41423",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency formula
{
    id: "formula41523",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula (basic)
{
    id: "formula41623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed
{
    id: "formula41723",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula41823",
    formula: "f = \\frac{1}{T}"
}, // Frequency from period
{
    id: "formula41923",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula42023",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula42123",
    formula: "P = I V"
}, // Electrical power formula
{
    id: "formula42223",
    formula: "v = \\lambda f"
}, // Wave velocity equation
{
    id: "formula42323",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula42423",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula42523",
    formula: "f_n = n f_1"
}, // Harmonics of a string or air column
{
    id: "formula42623",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula42723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency formula for waves
{
    id: "formula42823",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy in a capacitor
{
    id: "formula42923",
    formula: "P = F v"
}, // Mechanical power formula
{
    id: "formula43023",
    formula: "v = \\lambda f"
}, // Wave velocity equation
{
    id: "formula43123",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in RLC circuits
{
    id: "formula43223",
    formula: "f = \\frac{1}{T}"
}, // Frequency from period
{
    id: "formula43323",
    formula: "I = \\frac{V}{R}"
}, // Ohm's law for current
{
    id: "formula43423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula43523",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula43623",
    formula: "E = P t"
}, // Energy formula in terms of power and time
{
    id: "formula43723",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula43823",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula43923",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula44023",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a string vibrating in fundamental mode
{
    id: "formula44123",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency for a string
{
    id: "formula44223",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula (basic form)
{
    id: "formula44323",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula44423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula44523",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonance frequency for LC circuits
{
    id: "formula44623",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency in vibrating strings

{
    id: "formula60123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula60223",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula60323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula60423",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula60523",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula60623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula60723",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula60823",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength and velocity
{
    id: "formula60923",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula61023",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula61123",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula61223",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula61323",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula61423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula61523",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula61623",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula61723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula61823",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula61923",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula62023",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula62123",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula62223",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula62323",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula62423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula62523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula62623",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula62723",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula62823",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula62923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula63023",
    formula: "P = F v"
}, // Power in terms of force and velocity
{
    id: "formula63123",
    formula: "f_n = n f_1"
}, // Harmonics for vibrating strings
{
    id: "formula63223",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula63323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wave velocity and wavelength
{
    id: "formula63423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula63523",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Time period for a simple pendulum
{
    id: "formula63623",
    formula: "P = IV"
}, // Power in an electrical circuit
{
    id: "formula63723",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula63823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula63923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula64023",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula64123",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula64223",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula64323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula64423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula64523",
    formula: "f_n = n f_1"
}, // Harmonics in a string vibration
{
    id: "formula64623",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula64723",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula64823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula64923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula65023",
    formula: "f = \\frac{v}{\\lambda}"
} // Frequency-wavelength relation for waves

{
    id: "formula56123",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula56223",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula56323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula56423",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula56523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula56623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula56723",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula56823",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula56923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula57023",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula57123",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula57223",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula57323",
    formula: "P = IV"
}, // Power formula for electrical circuits
{
    id: "formula57423",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula57523",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula57623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula57723",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula57823",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula57923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula58023",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula58123",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula58223",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula58323",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula58423",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula58523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula58623",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula58723",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency and wavelength relation
{
    id: "formula58823",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula58923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula59023",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula59123",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula59223",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula59323",
    formula: "P = IV"
}, // Power in electrical circuits
{
    id: "formula59423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula59523",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula59623",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula59723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula59823",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula59923",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula60023",
    formula: "f_n = n f_1"
} // Harmonics in a vibrating string

{
    id: "formula50123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency formula for waves
{
    id: "formula50223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula50323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula50423",
    formula: "P = I V"
}, // Electrical power formula
{
    id: "formula50523",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula50623",
    formula: "v = \\lambda f"
}, // Wave velocity formula
{
    id: "formula50723",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula50823",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula50923",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula51023",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency equation for waves
{
    id: "formula51123",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string or air column
{
    id: "formula51223",
    formula: "P = F v"
}, // Power in a mechanical system
{
    id: "formula51323",
    formula: "v = \\sqrt{gL}"
}, // Speed of wave in a string
{
    id: "formula51423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency and wavelength relationship
{
    id: "formula51523",
    formula: "X = \\frac{V}{I}"
}, // Impedance in an AC circuit
{
    id: "formula51623",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula51723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula51823",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of period
{
    id: "formula51923",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula52023",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipated in RLC circuits
{
    id: "formula52123",
    formula: "P = \\frac{V^2}{R}"
}, // Power in a resistor
{
    id: "formula52223",
    formula: "f_n = n f_1"
}, // Harmonics for vibrating strings or air columns
{
    id: "formula52323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency and wavelength relation
{
    id: "formula52423",
    formula: "v = \\lambda f"
}, // Wave velocity and frequency relation
{
    id: "formula52523",
    formula: "T = \\frac{1}{f}"
}, // Time period of oscillation
{
    id: "formula52623",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula52723",
    formula: "E = P t"
}, // Energy as the product of power and time
{
    id: "formula52823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency and wavelength
{
    id: "formula52923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength and wave speed
{
    id: "formula53023",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula53123",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula53223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula53323",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula53423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wavelength
{
    id: "formula53523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula53623",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula53723",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in harmonic motion
{
    id: "formula53823",
    formula: "P = F v"
}, // Power in mechanical systems
{
    id: "formula53923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula54023",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula54123",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula54223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula54323",
    formula: "P = I^2 R"
}, // Power formula from current and resistance
{
    id: "formula54423",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula54523",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula54623",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula54723",
    formula: "E = P t"
}, // Energy in terms of power and time
{
    id: "formula54823",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula54923",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula55023",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula55123",
    formula: "f_n = n f_1"
}, // Harmonics in vibrating strings
{
    id: "formula55223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula55323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of an object in motion
{
    id: "formula55423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wave speed and wavelength
{
    id: "formula55523",
    formula: "P = F v"
}, // Power in mechanical systems
{
    id: "formula55623",
    formula: "f_n = n f_1"
}, // Harmonics in vibrating strings
{
    id: "formula55723",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency in an RC circuit
{
    id: "formula55823",
    formula: "v = \\sqrt{g L}"
}, // Wave velocity in a string
{
    id: "formula55923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula56023",
    formula: "f_n = n f_1"
}, // Harmonics in vibrating strings

{
    id: "formula44723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula44823",
    formula: "P = F v"
}, // Power in mechanical systems
{
    id: "formula44923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula45023",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula45123",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in RLC circuits
{
    id: "formula45223",
    formula: "v = \\sqrt{g L}"
}, // Wave velocity on a string
{
    id: "formula45323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula45423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula45523",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula45623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency equation
{
    id: "formula45723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula45823",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency for a vibrating string
{
    id: "formula45923",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency for a string
{
    id: "formula46023",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula in AC circuits
{
    id: "formula46123",
    formula: "v = \\lambda f"
}, // Wave velocity and frequency relation
{
    id: "formula46223",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency in an RC circuit
{
    id: "formula46323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in RLC circuits
{
    id: "formula46423",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula46523",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula46623",
    formula: "P = I V"
}, // Electrical power formula
{
    id: "formula46723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed
{
    id: "formula46823",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency formula
{
    id: "formula46923",
    formula: "E = P t"
}, // Energy equation from power and time
{
    id: "formula47023",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string or air column
{
    id: "formula47123",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula47223",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as rate of change of displacement
{
    id: "formula47323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency formula for waves
{
    id: "formula47423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula (basic form)
{
    id: "formula47523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula47623",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency equation for wave phenomena
{
    id: "formula47723",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula47823",
    formula: "P = F v"
}, // Power as the product of force and velocity
{
    id: "formula47923",
    formula: "f_n = n f_1"
}, // Harmonics for vibrating systems
{
    id: "formula48023",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in RLC circuits
{
    id: "formula48123",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy (general formula)
{
    id: "formula48223",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula48323",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency for an RC circuit
{
    id: "formula48423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula48523",
    formula: "X = \\frac{V}{I}"
}, // Impedance in AC circuits
{
    id: "formula48623",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string or air column
{
    id: "formula48723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wavelength
{
    id: "formula48823",
    formula: "v = \\lambda f"
}, // Wave velocity and frequency relation
{
    id: "formula48923",
    formula: "P = I^2 R"
}, // Power dissipation formula in resistive circuits
{
    id: "formula49023",
    formula: "E = P t"
}, // Energy from power and time
{
    id: "formula49123",
    formula: "f = \\frac{1}{T}"
}, // Frequency as inverse of period
{
    id: "formula49223",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula49323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in RLC circuits
{
    id: "formula49423",
    formula: "P = F v"
}, // Mechanical power formula
{
    id: "formula49523",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula49623",
    formula: "v = \\sqrt{gL}"
}, // Wave velocity on a string under tension
{
    id: "formula49723",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC filter cutoff frequency
{
    id: "formula49823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula (basic form)
{
    id: "formula49923",
    formula: "f_n = n f_1"
}, // Harmonics in vibrating strings
{
    id: "formula50023",
    formula: "v = \\lambda f"
} // Wave velocity formula in terms of wavelength and frequency

{
    id: "formula38523",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula38623",
    formula: "P = I^2 R"
}, // Power dissipated in a resistor (alternate form)
{
    id: "formula38723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula38823",
    formula: "v = \\sqrt{gL}"
}, // Wave velocity on a string
{
    id: "formula38923",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula39023",
    formula: "P = F v"
}, // Mechanical power equation
{
    id: "formula39123",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula39223",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula39323",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonant frequency of an LC circuit
{
    id: "formula39423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula39523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency from wavelength and wave speed
{
    id: "formula39623",
    formula: "I = \\frac{V}{R}"
}, // Ohm's law for current
{
    id: "formula39723",
    formula: "P = I V"
}, // Electrical power formula
{
    id: "formula39823",
    formula: "f_n = n f_1"
}, // Harmonics in a string
{
    id: "formula39923",
    formula: "X = \\frac{V}{I}"
}, // Impedance in AC circuits
{
    id: "formula40023",
    formula: "v = \\lambda f"
}, // Wave velocity formula
{
    id: "formula40123",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula40223",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency relation
{
    id: "formula40323",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula40423",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency for RC circuits
{
    id: "formula40523",
    formula: "E = P t"
}, // Energy formula in terms of power and time
{
    id: "formula40623",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency for a vibrating string
{
    id: "formula40723",
    formula: "v = \\sqrt{gL}"
}, // Speed of a wave on a string
{
    id: "formula40823",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula40923",
    formula: "I = \\frac{V}{R}"
}, // Ohm's law for current
{
    id: "formula41023",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula41123",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonance frequency of an LC circuit
{
    id: "formula41223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula41323",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the derivative of position
{
    id: "formula41423",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency formula
{
    id: "formula41523",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula (basic)
{
    id: "formula41623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed
{
    id: "formula41723",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula41823",
    formula: "f = \\frac{1}{T}"
}, // Frequency from period
{
    id: "formula41923",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula42023",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula42123",
    formula: "P = I V"
}, // Electrical power formula
{
    id: "formula42223",
    formula: "v = \\lambda f"
}, // Wave velocity equation
{
    id: "formula42323",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula42423",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula42523",
    formula: "f_n = n f_1"
}, // Harmonics of a string or air column
{
    id: "formula42623",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula42723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency formula for waves
{
    id: "formula42823",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy in a capacitor
{
    id: "formula42923",
    formula: "P = F v"
}, // Mechanical power formula
{
    id: "formula43023",
    formula: "v = \\lambda f"
}, // Wave velocity equation
{
    id: "formula43123",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in RLC circuits
{
    id: "formula43223",
    formula: "f = \\frac{1}{T}"
}, // Frequency from period
{
    id: "formula43323",
    formula: "I = \\frac{V}{R}"
}, // Ohm's law for current
{
    id: "formula43423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula43523",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula43623",
    formula: "E = P t"
}, // Energy formula in terms of power and time
{
    id: "formula43723",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula43823",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula43923",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula44023",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a string vibrating in fundamental mode
{
    id: "formula44123",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency for a string
{
    id: "formula44223",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula (basic form)
{
    id: "formula44323",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula44423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula44523",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonance frequency for LC circuits
{
    id: "formula44623",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency in vibrating strings

{
    id: "formula32123",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string or air column
{
    id: "formula32223",
    formula: "P = F v"
}, // Power in a mechanical system
{
    id: "formula32323",
    formula: "v = \\lambda f"
}, // Wave velocity relation
{
    id: "formula32423",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula32523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency in terms of speed and wavelength
{
    id: "formula32623",
    formula: "E = P t"
}, // Energy equation from power and time
{
    id: "formula32723",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula32823",
    formula: "f = \\frac{1}{T}"
}, // Frequency from period
{
    id: "formula32923",
    formula: "I = \\frac{V}{R}"
}, // Ohm's law for current
{
    id: "formula33023",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula33123",
    formula: "v = \\sqrt{g L}"
}, // Wave speed on a string
{
    id: "formula33223",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency for an RC circuit
{
    id: "formula33323",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula in AC circuits
{
    id: "formula33423",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the derivative of position
{
    id: "formula33523",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula33623",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonant frequency of an LC circuit
{
    id: "formula33723",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula33823",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula33923",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula34023",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency as a function of wave speed and wavelength
{
    id: "formula34123",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula34223",
    formula: "f_{cutoff} = \\frac{1}{2\\pi R C}"
}, // Cutoff frequency for an RC circuit
{
    id: "formula34323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency and wavelength relationship
{
    id: "formula34423",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula34523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipation in resistive circuits
{
    id: "formula34623",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula34723",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula34823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency of a wave
{
    id: "formula34923",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in harmonic motion
{
    id: "formula35023",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency for a string
{
    id: "formula35123",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipated in an RLC circuit
{
    id: "formula35223",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula35323",
    formula: "I = \\frac{V}{R}"
}, // Ohm's law for current
{
    id: "formula35423",
    formula: "X = \\frac{V}{I}"
}, // Impedance in an AC circuit
{
    id: "formula35523",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency
{
    id: "formula35623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula35723",
    formula: "E = P t"
}, // Energy in terms of power and time
{
    id: "formula35823",
    formula: "v = \\lambda f"
}, // Wave velocity relation
{
    id: "formula35923",
    formula: "P = F v"
}, // Power in a mechanical system
{
    id: "formula36023",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula36123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula36223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula36323",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula36423",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula36523",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonance frequency of an LC circuit
{
    id: "formula36623",
    formula: "P = F v"
}, // Mechanical power formula
{
    id: "formula36723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency relation
{
    id: "formula36823",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula36923",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula in electrical circuits
{
    id: "formula37023",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a string
{
    id: "formula37123",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity formula
{
    id: "formula37223",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in RLC circuits
{
    id: "formula37323",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula37423",
    formula: "f = \\frac{1}{T}"
}, // Frequency formula from period
{
    id: "formula37523",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula37623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula37723",
    formula: "P = F v"
}, // Power in a mechanical system
{
    id: "formula37823",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula37923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula38023",
    formula: "f_n = n f_1"
}, // Harmonics in vibrating strings
{
    id: "formula38123",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula38223",
    formula: "E = P t"
}, // Energy from power and time
{
    id: "formula38323",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency in an RC circuit
{
    id: "formula38423",
    formula: "v = \\sqrt{gL}"
}, // Wave velocity on a string under tension

{
    id: "formula26123",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula (basic)
{
    id: "formula26223",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula26323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula26423",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula26523",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula26623",
    formula: "F = -kx"
}, // Hooke’s law for spring force
{
    id: "formula26723",
    formula: "a = \\frac{v}{t}"
}, // Acceleration formula
{
    id: "formula26823",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula26923",
    formula: "X = \\frac{V}{I}"
}, // Impedance in AC circuits
{
    id: "formula27023",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula27123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency of a wave
{
    id: "formula27223",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s Law for current
{
    id: "formula27323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula27423",
    formula: "f = \\frac{1}{T}"
}, // Frequency from period
{
    id: "formula27523",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula27623",
    formula: "P = F v"
}, // Mechanical power formula
{
    id: "formula27723",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as rate of change of displacement
{
    id: "formula27823",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a string
{
    id: "formula27923",
    formula: "v = \\lambda f"
}, // Wave speed formula
{
    id: "formula28023",
    formula: "P = \\frac{V^2}{R}"
}, // Power in resistive circuit
{
    id: "formula28123",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string (nth)
{
    id: "formula28223",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula28323",
    formula: "F = \\mu m g"
}, // Force of friction
{
    id: "formula28423",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency for vibrating string
{
    id: "formula28523",
    formula: "T = \\frac{1}{f}"
}, // Period of oscillation
{
    id: "formula28623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency based on wave speed and wavelength
{
    id: "formula28723",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in RLC circuits
{
    id: "formula28823",
    formula: "v = \\lambda f"
}, // Wave speed and frequency relation
{
    id: "formula28923",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC filter cutoff frequency
{
    id: "formula29023",
    formula: "E = P t"
}, // Energy formula based on power and time
{
    id: "formula29123",
    formula: "P = F v"
}, // Power in mechanical systems
{
    id: "formula29223",
    formula: "a = \\frac{F}{m}"
}, // Newton’s second law of motion
{
    id: "formula29323",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as rate of change of position
{
    id: "formula29423",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in harmonic motion
{
    id: "formula29523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipation in a resistor (alternate form)
{
    id: "formula29623",
    formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
}, // Resonant frequency of an LC circuit
{
    id: "formula29723",
    formula: "I = m r^2"
}, // Moment of inertia of a point mass
{
    id: "formula29823",
    formula: "X = \\frac{V}{I}"
}, // Impedance in AC circuits
{
    id: "formula29923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipation in an electrical circuit
{
    id: "formula30023",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string or air column
{
    id: "formula30123",
    formula: "a = \\frac{dx}{dt}"
}, // Acceleration as rate of change of velocity
{
    id: "formula30223",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave
{
    id: "formula30323",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency equation for waves
{
    id: "formula30423",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency for RC circuit
{
    id: "formula30523",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula (basic form)
{
    id: "formula30623",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a string vibrating in its fundamental mode
{
    id: "formula30723",
    formula: "P = F v"
}, // Power in mechanical systems
{
    id: "formula30823",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula in resistive circuits
{
    id: "formula30923",
    formula: "v = \\sqrt{gL}"
}, // Velocity in terms of wave speed
{
    id: "formula31023",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency between two sound waves
{
    id: "formula31123",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation formula in an RLC circuit
{
    id: "formula31223",
    formula: "E = P t"
}, // Energy in terms of power and time
{
    id: "formula31323",
    formula: "X = \\frac{V}{I}"
}, // Impedance in AC circuits
{
    id: "formula31423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula31523",
    formula: "f_n = n f_1"
}, // Harmonics of a string or column of air
{
    id: "formula31623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency and wavelength relationship for waves
{
    id: "formula31723",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula31823",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // Cutoff frequency for RC circuits
{
    id: "formula31923",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula32023",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits

{
    id: "formula20023",
    formula: "P = I^2 R"
}, // Power dissipation in a resistor (alternative form)
{
    id: "formula20123",
    formula: "v = \\frac{1}{T}"
}, // Velocity in terms of time period
{
    id: "formula20223",
    formula: "A = \\frac{1}{2} m v^2"
}, // Kinetic energy (alternative form)
{
    id: "formula20323",
    formula: "P = \\frac{F v}{2}"
}, // Average power in an oscillating system
{
    id: "formula20423",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum (alternative form)
{
    id: "formula20523",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength and wave speed
{
    id: "formula20623",
    formula: "x(t) = A \\cos(\\omega t + \\phi)"
}, // Cosine wave displacement formula
{
    id: "formula20723",
    formula: "F = \\frac{1}{2} m v^2"
}, // Kinetic energy formula (basic form)
{
    id: "formula20823",
    formula: "E = P t"
}, // Energy in terms of power and time
{
    id: "formula20923",
    formula: "v = \\frac{2 d}{t}"
}, // Average velocity formula (distance over time)
{
    id: "formula21023",
    formula: "f_n = n \\cdot f_1"
}, // Harmonics for a vibrating string
{
    id: "formula21123",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor (basic form)
{
    id: "formula21223",
    formula: "f = \\frac{1}{T}"
}, // Frequency of a periodic signal
{
    id: "formula21323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula21423",
    formula: "X = \\frac{V}{I}"
}, // Impedance in AC circuits
{
    id: "formula21523",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula21623",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency between two waves
{
    id: "formula21723",
    formula: "P = I V"
}, // Electrical power in terms of current and voltage
{
    id: "formula21823",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula21923",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a string
{
    id: "formula22023",
    formula: "I = \\frac{V}{R}"
}, // Ohm's Law for current
{
    id: "formula22123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistive circuit
{
    id: "formula22223",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of an object in motion
{
    id: "formula22323",
    formula: "f_{cutoff} = \\frac{1}{2\\pi R C}"
}, // Cutoff frequency for an RC circuit
{
    id: "formula22423",
    formula: "S = \\int_{-\\infty}^{\\infty} |X(f)|^2 df"
}, // Spectral energy formula
{
    id: "formula22523",
    formula: "f_n = n f_1"
}, // Harmonics formula for a string or air column
{
    id: "formula22623",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as rate of change of displacement
{
    id: "formula22723",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula22823",
    formula: "F = ma"
}, // Newton's second law of motion
{
    id: "formula22923",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a string vibrating in the fundamental mode
{
    id: "formula23023",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula23123",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in harmonic motion
{
    id: "formula23223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipation formula in a resistor
{
    id: "formula23323",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal wave displacement
{
    id: "formula23423",
    formula: "a = \\frac{v}{t}"
}, // Acceleration formula
{
    id: "formula23523",
    formula: "f_{cutoff} = \\frac{1}{2\\pi R C}"
}, // Cutoff frequency in an RC filter
{
    id: "formula23623",
    formula: "I = m r^2"
}, // Moment of inertia for a point mass
{
    id: "formula23723",
    formula: "v = \\lambda f"
}, // Wave velocity equation
{
    id: "formula23823",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula23923",
    formula: "P = F v"
}, // Power in a mechanical system
{
    id: "formula24023",
    formula: "T = \\frac{1}{f}"
}, // Time period of oscillation
{
    id: "formula24123",
    formula: "f_{max} = \\frac{v}{2L}"
}, // Maximum frequency of a vibrating string
{
    id: "formula24223",
    formula: "a = -A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula24323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula in an electrical circuit
{
    id: "formula24423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wave speed and wavelength
{
    id: "formula24523",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a mechanical wave
{
    id: "formula24623",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Wave velocity in a dielectric material
{
    id: "formula24723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency equation for waves
{
    id: "formula24823",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula24923",
    formula: "E = P t"
}, // Energy formula in terms of power and time
{
    id: "formula25023",
    formula: "X = \\frac{V}{I}"
}, // Impedance in an AC circuit
{
    id: "formula25123",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as rate of change of displacement
{
    id: "formula25223",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula25323",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula25423",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula25523",
    formula: "f_{cutoff} = \\frac{1}{2 \\pi R C}"
}, // RC circuit cutoff frequency formula
{
    id: "formula25623",
    formula: "P = F v"
}, // Mechanical power formula
{
    id: "formula25723",
    formula: "a = \\frac{F}{m}"
}, // Newton's second law of motion
{
    id: "formula25823",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula25923",
    formula: "v = \\sqrt{gL}"
}, // Velocity of a wave on a string under tension
{
    id: "formula26023",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency between two waves

{
    id: "formula12523",
    formula: "f = \\frac{c}{\\lambda}"
}, // Relationship between frequency and wavelength in vacuum
{
    id: "formula12623",
    formula: "v = \\sqrt{g L}"
}, // Speed of wave on a string under tension
{
    id: "formula12723",
    formula: "f = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}"
}, // Frequency of a mass-spring system
{
    id: "formula12823",
    formula: "T = \\frac{1}{f}"
}, // Time period of oscillation
{
    id: "formula12923",
    formula: "f = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula13023",
    formula: "P = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula13123",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula13223",
    formula: "f = \\frac{1}{T}"
}, // Frequency from period
{
    id: "formula13323",
    formula: "v = \\lambda f"
}, // Wave velocity equation
{
    id: "formula13423",
    formula: "I = m r^2"
}, // Moment of inertia of a point mass
{
    id: "formula13523",
    formula: "F = -kx"
}, // Hooke’s law for spring force
{
    id: "formula13623",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, // Cosine wave displacement equation
{
    id: "formula13723",
    formula: "a = \\frac{F}{m}"
}, // Newton’s second law of motion
{
    id: "formula13823",
    formula: "P = Fv"
}, // Power as force times velocity
{
    id: "formula13923",
    formula: "f = \\frac{c}{\\lambda}"
}, // Wave frequency formula
{
    id: "formula14023",
    formula: "x(t) = A e^{i \\omega t}"
}, // Complex exponential form of a wave
{
    id: "formula14123",
    formula: "f(t) = A \\sin(\\omega t + \\phi)"
}, // Sinusoidal displacement equation
{
    id: "formula14223",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in harmonic motion
{
    id: "formula14323",
    formula: "a_{max} = A \\omega^2"
}, // Maximum acceleration in SHM
{
    id: "formula14423",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula14523",
    formula: "v = \\frac{dx}{dt}"
}, // Velocity as the rate of change of position
{
    id: "formula14623",
    formula: "F_{spring} = -kx"
}, // Spring force from Hooke’s law
{
    id: "formula14723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor (Ohm’s law)
{
    id: "formula14823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy equation
{
    id: "formula14923",
    formula: "v = \\sqrt{gL}"
}, // Speed of a wave on a string
{
    id: "formula15023",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula15123",
    formula: "I = \\frac{V}{R}"
}, // Ohm’s law for current
{
    id: "formula15223",
    formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a string vibrating in its fundamental mode
{
    id: "formula15323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula15423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Wave frequency in terms of velocity and wavelength
{
    id: "formula15523",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula15623",
    formula: "I = \\int_0^T x(t) dt"
}, // Total energy of a signal over time
{
    id: "formula15723",
    formula: "F = \\mu m g"
}, // Force due to friction on a mass
{
    id: "formula15823",
    formula: "f = \\frac{1}{2 L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula15923",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power in an RLC circuit
{
    id: "formula16023",
    formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
}, // Speed of light in a medium
{
    id: "formula16123",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy in a wave in a medium
{
    id: "formula16223",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula16323",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula16423",
    formula: "T = \\frac{1}{f}"
}, // Time period of a periodic signal
{
    id: "formula16523",
    formula: "f = \\frac{1}{T}"
}, // Frequency of a periodic signal
{
    id: "formula16623",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula16723",
    formula: "v = v_0 + at"
}, // Velocity with uniform acceleration
{
    id: "formula16823",
    formula: "A = \\pi r^2"
}, // Area of a circle
{
    id: "formula16923",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula17023",
    formula: "v = A \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula17123",
    formula: "T = \\frac{1}{f}"
}, // Time period as inverse of frequency
{
    id: "formula17223",
    formula: "I = m r^2"
}, // Moment of inertia for point mass
{
    id: "formula17323",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula17423",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, // Sum of discrete signal values
{
    id: "formula17523",
    formula: "f_{fundamental} = \\frac{c}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula17623",
    formula: "X = \\frac{V}{I}"
}, // Impedance formula
{
    id: "formula17723",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula17823",
    formula: "E = \\frac{1}{2} \\mu v^2"
}, // Energy of a wave in a medium
{
    id: "formula17923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula18023",
    formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
}, // Frequency of a vibrating string
{
    id: "formula18123",
    formula: "T = \\frac{1}{f}"
}, // Period from frequency
{
    id: "formula18223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula18323",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula18423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula18523",
    formula: "v = \\frac{dx}{dt}"
}, // Rate of change of position
{
    id: "formula18623",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula18723",
    formula: "T = \\frac{2L}{v}"
}, // Time period of a standing wave
{
    id: "formula18823",
    formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
}, // Acceleration in SHM
{
    id: "formula18923",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation formula for RLC circuits
{
    id: "formula19023",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity of a wave
{
    id: "formula19123",
    formula: "I = \\frac{V}{R}"
}, // Ohm's Law for current
{
    id: "formula19223",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency equation for waves
{
    id: "formula19323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for electrical circuits
{
    id: "formula19423",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula19523",
    formula: "f = \\frac{1}{T}"
}, // Frequency from time period
{
    id: "formula19623",
    formula: "I = \\sum_{n=0}^{N-1} x_n"
}, // Sum of signal values
{
    id: "formula19723",
    formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
}, // Period of a simple pendulum
{
    id: "formula19823",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula19923",
    formula: "E = \\frac{1}{2} C V^2"
} // Energy stored in a capacitor

{
    id: "formula60123",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula60223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula60323",
    formula: "f_n = n f_1"
}, // nth harmonic frequency for a vibrating string
{
    id: "formula60423",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula60523",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula60623",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula60723",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula60823",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula60923",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula61023",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula61123",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula61223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula61323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency for a vibrating string
{
    id: "formula61423",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula61523",
    formula: "f_n = n f_1"
}, // nth harmonic frequency
{
    id: "formula61623",
    formula: "P = F v"
}, // Power equation (Force * Velocity)
{
    id: "formula61723",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula61823",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula61923",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula for a moving object
{
    id: "formula62023",
    formula: "f_n = n f_1"
}, // nth harmonic for vibrating string
{
    id: "formula62123",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula62223",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula62323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula62423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula62523",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula62623",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula62723",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula62823",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula62923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula63023",
    formula: "f_n = n f_1"
}, // nth harmonic for vibrating string
{
    id: "formula63123",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula63223",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula63323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation
{
    id: "formula63423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula63523",
    formula: "f_n = n f_1"
}, // nth harmonic of a vibrating string
{
    id: "formula63623",
    formula: "P = F v"
}, // Power equation (Force * Velocity)
{
    id: "formula63723",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula63823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wavelength
{
    id: "formula63923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula64023",
    formula: "P = F v"
}, // Power equation for force and velocity
{
    id: "formula64123",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula64223",
    formula: "T = \\frac{2L}{v}"
}, // Time period for wave on a string
{
    id: "formula64323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula64423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength in waves
{
    id: "formula64523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula64623",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency for vibrating string
{
    id: "formula64723",
    formula: "f_n = n f_1"
}, // Harmonics for vibrating string
{
    id: "formula64823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula64923",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula65023",
    formula: "P = F v"
} // Power as force times velocity
];


{
    id: "formula55123",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency for vibrating strings
{
    id: "formula55223",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula55323",
    formula: "f_n = n f_1"
}, // nth harmonic frequency for vibrating string
{
    id: "formula55423",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula55523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula55623",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula55723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula55823",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula55923",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency
{
    id: "formula56023",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula56123",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula56223",
    formula: "T = \\frac{2L}{v}"
}, // Time period for wave on a string
{
    id: "formula56323",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula56423",
    formula: "f_n = n f_1"
}, // nth harmonic for a vibrating string
{
    id: "formula56523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula56623",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula56723",
    formula: "v = \\lambda f"
}, // Wave speed formula
{
    id: "formula56823",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula56923",
    formula: "f_n = n f_1"
}, // nth harmonic of a vibrating string
{
    id: "formula57023",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency formula for a vibrating string
{
    id: "formula57123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula57223",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula57323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency in terms of wavelength
{
    id: "formula57423",
    formula: "P = F v"
}, // Power equation (Force * Velocity)
{
    id: "formula57523",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula57623",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula57723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula57823",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula57923",
    formula: "f_n = n f_1"
}, // nth harmonic for a vibrating string
{
    id: "formula58023",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula58123",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula58223",
    formula: "P = V I"
}, // Power in electrical circuits
{
    id: "formula58323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula58423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula58523",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula
{
    id: "formula58623",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula58723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula58823",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula58923",
    formula: "f_n = n f_1"
}, // nth harmonic for a vibrating string
{
    id: "formula59023",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency for a vibrating string
{
    id: "formula59123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula59223",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula59323",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula59423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation for waves
{
    id: "formula59523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula59623",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a string
{
    id: "formula59723",
    formula: "f_n = n f_1"
}, // nth harmonic frequency for vibrating string
{
    id: "formula59823",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipated in an RLC circuit
{
    id: "formula59923",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula60023",
    formula: "P = F v"
} // Power equation (Force * Velocity)

{
    id: "formula49623",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula49723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula49823",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation
{
    id: "formula49923",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula50023",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula50123",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula50223",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency for a vibrating string
{
    id: "formula50323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula50423",
    formula: "f_n = n f_1"
}, // nth harmonic of a vibrating string
{
    id: "formula50523",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula50623",
    formula: "P = F v"
}, // Power equation from force and velocity
{
    id: "formula50723",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula50823",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipated in an RLC circuit
{
    id: "formula50923",
    formula: "f_n = n f_1"
}, // nth harmonic for vibrating string
{
    id: "formula51023",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of an object
{
    id: "formula51123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula51223",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula51323",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula51423",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in SHM
{
    id: "formula51523",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula51623",
    formula: "f_n = n f_1"
}, // nth harmonic for a vibrating string
{
    id: "formula51723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula51823",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula51923",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula52023",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula52123",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula52223",
    formula: "P = \\frac{V^2}{R}"
}, // Power formula for resistive circuits
{
    id: "formula52323",
    formula: "f_n = n f_1"
}, // nth harmonic frequency of a vibrating string
{
    id: "formula52423",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula52523",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula52623",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipation in an RLC circuit
{
    id: "formula52723",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula52823",
    formula: "P = F v"
}, // Power equation (Force * Velocity)
{
    id: "formula52923",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula53023",
    formula: "f_n = n f_1"
}, // nth harmonic for vibrating string
{
    id: "formula53123",
    formula: "T = \\frac{2L}{v}"
}, // Time period for wave on a string
{
    id: "formula53223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula53323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula53423",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency for vibrating strings
{
    id: "formula53523",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy formula for a moving object
{
    id: "formula53623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula53723",
    formula: "P = F v"
}, // Power as force times velocity
{
    id: "formula53823",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula53923",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula54023",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipated in an RLC circuit
{
    id: "formula54123",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula54223",
    formula: "P = V I"
}, // Power in electrical circuits
{
    id: "formula54323",
    formula: "f_n = n f_1"
}, // nth harmonic frequency of a vibrating string
{
    id: "formula54423",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula54523",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation
{
    id: "formula54623",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula54723",
    formula: "f_n = n f_1"
}, // Harmonics for a vibrating string
{
    id: "formula54823",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula54923",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula55023",
    formula: "P = \\frac{V^2}{R}"
} // Power dissipated across a resistor

{
    id: "formula45123",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relation
{
    id: "formula45223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated across a resistor
{
    id: "formula45323",
    formula: "f_n = n f_1"
}, // Harmonics of a vibrating string
{
    id: "formula45423",
    formula: "P = F v"
}, // Power equation (Force * Velocity)
{
    id: "formula45523",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency for a string
{
    id: "formula45623",
    formula: "T = \\frac{1}{f}"
}, // Time period as the inverse of frequency
{
    id: "formula45723",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula45823",
    formula: "f = \\frac{c}{\\lambda}"
}, // Frequency-wavelength relationship for waves
{
    id: "formula45923",
    formula: "f_n = n f_1"
}, // Harmonics in a vibrating string
{
    id: "formula46023",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula46123",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a moving object
{
    id: "formula46223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula46323",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength in waves
{
    id: "formula46423",
    formula: "f_{beat} = |f_1 - f_2|"
}, // Beat frequency formula
{
    id: "formula46523",
    formula: "T = \\frac{2L}{v}"
}, // Time period for a wave on a string
{
    id: "formula46623",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a vibrating string
{
    id: "formula46723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula46823",
    formula: "f_n = n f_1"
}, // Harmonics for vibrating string
{
    id: "formula46923",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency of a wave
{
    id: "formula47023",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula47123",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in resistive circuits
{
    id: "formula47223",
    formula: "f_n = n f_1"
}, // Harmonics in string vibrations
{
    id: "formula47323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency formula
{
    id: "formula47423",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Velocity in SHM
{
    id: "formula47523",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula47623",
    formula: "E = \\frac{1}{2} C V^2"
}, // Energy stored in a capacitor
{
    id: "formula47723",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency from wavelength
{
    id: "formula47823",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in harmonic motion
{
    id: "formula47923",
    formula: "T = \\frac{2L}{v}"
}, // Time period for wave on a string
{
    id: "formula48023",
    formula: "P = \\frac{I^2 R}{L}"
}, // Power dissipated in an RLC circuit
{
    id: "formula48123",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency of a string
{
    id: "formula48223",
    formula: "P = V I"
}, // Power in an electrical circuit
{
    id: "formula48323",
    formula: "P = F v"
}, // Power from force and velocity
{
    id: "formula48423",
    formula: "f = \\frac{v}{\\lambda}"
}, // Frequency-wavelength relationship
{
    id: "formula48523",
    formula: "f_n = n f_1"
}, // nth harmonic for a vibrating string
{
    id: "formula48623",
    formula: "E = \\frac{1}{2} m v^2"
}, // Kinetic energy of a particle
{
    id: "formula48723",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated in a resistor
{
    id: "formula48823",
    formula: "v = A \\omega \\cos(\\omega t + \\phi)"
}, // Maximum velocity in SHM
{
    id: "formula48923",
    formula: "f_n = n f_1"
}, // Harmonics in string vibrations
{
    id: "formula49023",
    formula: "T = \\frac{1}{f}"
}, // Time period from frequency
{
    id: "formula49123",
    formula: "P = F v"
}, // Power equation (Force * Velocity)
{
    id: "formula49223",
    formula: "P = \\frac{V^2}{R}"
}, // Power dissipated by a resistor
{
    id: "formula49323",
    formula: "f_{fundamental} = \\frac{v}{2L}"
}, // Fundamental frequency formula
{
    id: "formula49423",
    formula: "v_{max} = A \\omega"
}, // Maximum velocity in harmonic motion
{
    id: "formula49523",
    formula: "f_n = n f_1"
}, // nth harmonic of a vibrating string
{
    id: "formula49623",
    formula:

    {
        id: "formula40123",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength relationship
    {
        id: "formula40223",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in resistive circuits
    {
        id: "formula40323",
        formula: "I = \\frac{V}{R}"
    }, // Ohm’s law for current
    {
        id: "formula40423",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency for a vibrating string
    {
        id: "formula40523",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power dissipation in RLC circuits
    {
        id: "formula40623",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula40723",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Maximum velocity in SHM
    {
        id: "formula40823",
        formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
    }, // Acceleration in SHM
    {
        id: "formula40923",
        formula: "f_n = n f_1"
    }, // Harmonics for vibrating string
    {
        id: "formula41023",
        formula: "T = \\frac{2L}{v}"
    }, // Time period for wave on a string
    {
        id: "formula41123",
        formula: "P = F v"
    }, // Power as force times velocity
    {
        id: "formula41223",
        formula: "P = \\frac{V^2}{R}"
    }, // Power formula for resistive circuits
    {
        id: "formula41323",
        formula: "f_{beat} = |f_1 - f_2|"
    }, // Beat frequency formula
    {
        id: "formula41423",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength equation
    {
        id: "formula41523",
        formula: "f_n = n f_1"
    }, // Harmonics of a vibrating string
    {
        id: "formula41623",
        formula: "E = \\frac{1}{2} m v^2"
    }, // Kinetic energy of a moving object
    {
        id: "formula41723",
        formula: "v = \\sqrt{g L}"
    }, // Wave speed on a string under tension
    {
        id: "formula41823",
        formula: "f = \\frac{1}{T}"
    }, // Frequency in terms of time period
    {
        id: "formula41923",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in a resistor
    {
        id: "formula42023",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Maximum velocity in SHM
    {
        id: "formula42123",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency formula for a vibrating string
    {
        id: "formula42223",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Wave speed equation in terms of frequency and wavelength
    {
        id: "formula42323",
        formula: "P = V I"
    }, // Power in an electrical circuit
    {
        id: "formula42423",
        formula: "T = \\frac{2L}{v}"
    }, // Time period of a wave on a string
    {
        id: "formula42523",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength relationship
    {
        id: "formula42623",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula42723",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated by a resistor
    {
        id: "formula42823",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power dissipation in an RLC circuit
    {
        id: "formula42923",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency of wave in terms of wavelength
    {
        id: "formula43023",
        formula: "f_n = n f_1"
    }, // Harmonics for vibrating string
    {
        id: "formula43123",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Maximum velocity in SHM
    {
        id: "formula43223",
        formula: "T = \\frac{1}{f}"
    }, // Time period formula from frequency
    {
        id: "formula43323",
        formula: "f_{beat} = |f_1 - f_2|"
    }, // Beat frequency formula
    {
        id: "formula43423",
        formula: "v_{max} = A \\omega"
    }, // Maximum velocity in harmonic motion
    {
        id: "formula43523",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency formula
    {
        id: "formula43623",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula43723",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Velocity in SHM
    {
        id: "formula43823",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated across a resistor
    {
        id: "formula43923",
        formula: "f_n = n f_1"
    }, // nth harmonic for a vibrating string
    {
        id: "formula44023",
        formula: "E = \\frac{1}{2} m v^2"
    }, // Kinetic energy formula
    {
        id: "formula44123",
        formula: "f = \\frac{1}{T}"
    }, // Frequency as inverse of time period
    {
        id: "formula44223",
        formula: "P = F v"
    }, // Power as force times velocity
    {
        id: "formula44323",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in resistive circuits
    {
        id: "formula44423",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength relationship for waves
    {
        id: "formula44523",
        formula: "f_n = n f_1"
    }, // Harmonics for vibrating string
    {
        id: "formula44623",
        formula: "T = \\frac{2L}{v}"
    }, // Time period for a wave on a string
    {
        id: "formula44723",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in resistive circuits
    {
        id: "formula44823",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency for a string
    {
        id: "formula44923",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Maximum velocity in SHM
    {
        id: "formula45023",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor

    {
        id: "formula40123",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength relationship
    {
        id: "formula40223",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in resistive circuits
    {
        id: "formula40323",
        formula: "I = \\frac{V}{R}"
    }, // Ohm’s law for current
    {
        id: "formula40423",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency for a vibrating string
    {
        id: "formula40523",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power dissipation in RLC circuits
    {
        id: "formula40623",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula40723",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Maximum velocity in SHM
    {
        id: "formula40823",
        formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
    }, // Acceleration in SHM
    {
        id: "formula40923",
        formula: "f_n = n f_1"
    }, // Harmonics for vibrating string
    {
        id: "formula41023",
        formula: "T = \\frac{2L}{v}"
    }, // Time period for wave on a string
    {
        id: "formula41123",
        formula: "P = F v"
    }, // Power as force times velocity
    {
        id: "formula41223",
        formula: "P = \\frac{V^2}{R}"
    }, // Power formula for resistive circuits
    {
        id: "formula41323",
        formula: "f_{beat} = |f_1 - f_2|"
    }, // Beat frequency formula
    {
        id: "formula41423",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength equation
    {
        id: "formula41523",
        formula: "f_n = n f_1"
    }, // Harmonics of a vibrating string
    {
        id: "formula41623",
        formula: "E = \\frac{1}{2} m v^2"
    }, // Kinetic energy of a moving object
    {
        id: "formula41723",
        formula: "v = \\sqrt{g L}"
    }, // Wave speed on a string under tension
    {
        id: "formula41823",
        formula: "f = \\frac{1}{T}"
    }, // Frequency in terms of time period
    {
        id: "formula41923",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in a resistor
    {
        id: "formula42023",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Maximum velocity in SHM
    {
        id: "formula42123",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency formula for a vibrating string
    {
        id: "formula42223",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Wave speed equation in terms of frequency and wavelength
    {
        id: "formula42323",
        formula: "P = V I"
    }, // Power in an electrical circuit
    {
        id: "formula42423",
        formula: "T = \\frac{2L}{v}"
    }, // Time period of a wave on a string
    {
        id: "formula42523",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength relationship
    {
        id: "formula42623",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula42723",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated by a resistor
    {
        id: "formula42823",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power dissipation in an RLC circuit
    {
        id: "formula42923",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency of wave in terms of wavelength
    {
        id: "formula43023",
        formula: "f_n = n f_1"
    }, // Harmonics for vibrating string
    {
        id: "formula43123",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Maximum velocity in SHM
    {
        id: "formula43223",
        formula: "T = \\frac{1}{f}"
    }, // Time period formula from frequency
    {
        id: "formula43323",
        formula: "f_{beat} = |f_1 - f_2|"
    }, // Beat frequency formula
    {
        id: "formula43423",
        formula: "v_{max} = A \\omega"
    }, // Maximum velocity in harmonic motion
    {
        id: "formula43523",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency formula
    {
        id: "formula43623",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula43723",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Velocity in SHM
    {
        id: "formula43823",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated across a resistor
    {
        id: "formula43923",
        formula: "f_n = n f_1"
    }, // nth harmonic for a vibrating string
    {
        id: "formula44023",
        formula: "E = \\frac{1}{2} m v^2"
    }, // Kinetic energy formula
    {
        id: "formula44123",
        formula: "f = \\frac{1}{T}"
    }, // Frequency as inverse of time period
    {
        id: "formula44223",
        formula: "P = F v"
    }, // Power as force times velocity
    {
        id: "formula44323",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in resistive circuits
    {
        id: "formula44423",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength relationship for waves
    {
        id: "formula44523",
        formula: "f_n = n f_1"
    }, // Harmonics for vibrating string
    {
        id: "formula44623",
        formula: "T = \\frac{2L}{v}"
    }, // Time period for a wave on a string
    {
        id: "formula44723",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in resistive circuits
    {
        id: "formula44823",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency for a string
    {
        id: "formula44923",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Maximum velocity in SHM
    {
        id: "formula45023",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor

    {
        id: "formula34123",
        formula: "v_{max} = A \\omega"
    }, // Maximum velocity in SHM
    {
        id: "formula34223",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength relationship
    {
        id: "formula34323",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in resistive circuits
    {
        id: "formula34423",
        formula: "f_n = n f_1"
    }, // nth harmonic frequency in a string
    {
        id: "formula34523",
        formula: "v = \\lambda f"
    }, // Wave velocity equation
    {
        id: "formula34623",
        formula: "T = \\frac{2L}{v}"
    }, // Time period for wave on a string
    {
        id: "formula34723",
        formula: "f = \\frac{c}{\\lambda}"
    }, // Frequency from wavelength
    {
        id: "formula34823",
        formula: "f = \\frac{1}{T}"
    }, // Frequency in terms of time period
    {
        id: "formula34923",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated across a resistor
    {
        id: "formula35023",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency for a string
    {
        id: "formula35123",
        formula: "E = \\frac{1}{2} m v^2"
    }, // Kinetic energy formula
    {
        id: "formula35223",
        formula: "f_{fundamental} = \\frac{1}{2L} \\sqrt{T / \\mu}"
    }, // Frequency of vibrating string
    {
        id: "formula35323",
        formula: "f_n = n f_1"
    }, // Harmonics in string vibration
    {
        id: "formula35423",
        formula: "T = \\frac{2L}{v}"
    }, // Time period for a wave on a string
    {
        id: "formula35523",
        formula: "P = V I"
    }, // Power in an electrical circuit
    {
        id: "formula35623",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated across a resistor
    {
        id: "formula35723",
        formula: "I = \\frac{V}{R}"
    }, // Ohm's Law for current
    {
        id: "formula35823",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Velocity in SHM
    {
        id: "formula35923",
        formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
    }, // Acceleration in SHM
    {
        id: "formula36023",
        formula: "T = \\frac{1}{f}"
    }, // Time period from frequency
    {
        id: "formula36123",
        formula: "E = \\frac{1}{2} \\mu v^2"
    }, // Energy in a wave
    {
        id: "formula36223",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power dissipation in RLC circuits
    {
        id: "formula36323",
        formula: "f_n = n f_1"
    }, // Harmonics for string vibrations
    {
        id: "formula36423",
        formula: "I = \\sum_{n=0}^{N-1} x_n"
    }, // Sum of discrete signal values
    {
        id: "formula36523",
        formula: "P = \\frac{V^2}{R}"
    }, // Power formula in resistive circuits
    {
        id: "formula36623",
        formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
    }, // Period of a pendulum
    {
        id: "formula36723",
        formula: "v = \\sqrt{g L}"
    }, // Speed of a wave on a string
    {
        id: "formula36823",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency in terms of wavelength
    {
        id: "formula36923",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula37023",
        formula: "v_{max} = A \\omega"
    }, // Maximum velocity in harmonic motion
    {
        id: "formula37123",
        formula: "T = \\frac{2L}{v}"
    }, // Time period for standing wave on a string
    {
        id: "formula37223",
        formula: "a = - \\omega^2 x"
    }, // Acceleration in simple harmonic motion
    {
        id: "formula37323",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated across a resistor
    {
        id: "formula37423",
        formula: "f_{beat} = |f_1 - f_2|"
    }, // Beat frequency formula
    {
        id: "formula37523",
        formula: "f_n = n f_1"
    }, // nth harmonic for vibrating string
    {
        id: "formula37623",
        formula: "P = F v"
    }, // Power equation for force times velocity
    {
        id: "formula37723",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency from wavelength in waves
    {
        id: "formula37823",
        formula: "E = \\frac{1}{2} m v^2"
    }, // Kinetic energy formula
    {
        id: "formula37923",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated by a resistor
    {
        id: "formula38023",
        formula: "f_n = n f_1"
    }, // Harmonics for a vibrating string
    {
        id: "formula38123",
        formula: "T = \\frac{2L}{v}"
    }, // Time period of a wave on a string
    {
        id: "formula38223",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power dissipated in an RLC circuit
    {
        id: "formula38323",
        formula: "I = \\frac{V}{R}"
    }, // Current from voltage and resistance
    {
        id: "formula38423",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency of a vibrating string
    {
        id: "formula38523",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated across a resistor
    {
        id: "formula38623",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula38723",
        formula: "f_n = n f_1"
    }, // Harmonics of a vibrating string
    {
        id: "formula38823",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Velocity in SHM
    {
        id: "formula38923",
        formula: "f_{beat} = |f_1 - f_2|"
    }, // Beat frequency
    {
        id: "formula39023",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in a resistor
    {
        id: "formula39123",
        formula: "T = \\frac{2L}{v}"
    }, // Time period for wave on a string
    {
        id: "formula39223",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength relationship
    {
        id: "formula39323",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula39423",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Maximum velocity in SHM
    {
        id: "formula39523",
        formula: "f_n = n f_1"
    }, // nth harmonic frequency
    {
        id: "formula39623",
        formula: "f = \\frac{1}{T}"
    }, // Frequency formula in terms of time period
    {
        id: "formula39723",
        formula: "P = F v"
    }, // Power as force times velocity
    {
        id: "formula39823",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength equation
    {
        id: "formula39923",
        formula: "E = \\frac{1}{2} m v^2"
    }, // Kinetic energy formula for a particle
    {
        id: "formula40023",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    } // Fundamental frequency of a vibrating string

    {
        id: "formula27123",
        formula: "f_{harmonic} = n f_1"
    }, // nth harmonic frequency for a vibrating string
    {
        id: "formula27223",
        formula: "v = \\sqrt{gL}"
    }, // Wave velocity on a string under tension
    {
        id: "formula27323",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power dissipation in RLC circuits
    {
        id: "formula27423",
        formula: "T = \\frac{2L}{v}"
    }, // Time period for a wave on a string
    {
        id: "formula27523",
        formula: "f = \\frac{c}{\\lambda}"
    }, // Frequency from wavelength in a medium
    {
        id: "formula27623",
        formula: "v = \\lambda f"
    }, // Wave speed formula
    {
        id: "formula27723",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula27823",
        formula: "v_{max} = A \\omega"
    }, // Maximum velocity in SHM
    {
        id: "formula27923",
        formula: "I = m r^2"
    }, // Moment of inertia of a point mass
    {
        id: "formula28023",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated across a resistor
    {
        id: "formula28123",
        formula: "f_n = n f_1"
    }, // nth harmonic frequency for a string
    {
        id: "formula28223",
        formula: "f = \\frac{1}{T}"
    }, // Frequency in terms of time period
    {
        id: "formula28323",
        formula: "A = \\pi r^2"
    }, // Area of a circle
    {
        id: "formula28423",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated by a resistor
    {
        id: "formula28523",
        formula: "f = \\frac{c}{\\lambda}"
    }, // Frequency-wavelength relationship
    {
        id: "formula28623",
        formula: "P = \\frac{1}{2} m v^2"
    }, // Kinetic energy
    {
        id: "formula28723",
        formula: "a = - \\omega^2 x"
    }, // Acceleration in simple harmonic motion
    {
        id: "formula28823",
        formula: "v = \\frac{dx}{dt}"
    }, // Velocity as the rate of change of displacement
    {
        id: "formula28923",
        formula: "I = \\sum_{n=0}^{N-1} x_n"
    }, // Sum of discrete signal values
    {
        id: "formula29023",
        formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
    }, // Period of a pendulum
    {
        id: "formula29123",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency of a vibrating string
    {
        id: "formula29223",
        formula: "f_{beat} = |f_1 - f_2|"
    }, // Beat frequency
    {
        id: "formula29323",
        formula: "f = \\frac{1}{T}"
    }, // Frequency from time period
    {
        id: "formula29423",
        formula: "I = \\frac{V}{R}"
    }, // Ohm’s law for current
    {
        id: "formula29523",
        formula: "P = F v"
    }, // Power as force times velocity
    {
        id: "formula29623",
        formula: "P = \\frac{V^2}{R}"
    }, // Power formula for resistive circuits
    {
        id: "formula29723",
        formula: "f_n = n f_1"
    }, // Harmonics for a vibrating string
    {
        id: "formula29823",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency from wavelength
    {
        id: "formula29923",
        formula: "T = \\frac{1}{f}"
    }, // Period from frequency
    {
        id: "formula30023",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in resistive circuits
    {
        id: "formula30123",
        formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
    }, // Frequency of vibrating string
    {
        id: "formula30223",
        formula: "P = V I"
    }, // Power in electrical circuits
    {
        id: "formula30323",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula30423",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength relationship for waves
    {
        id: "formula30523",
        formula: "I = \\frac{V}{R}"
    }, // Ohm’s law for current
    {
        id: "formula30623",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency in terms of wavelength
    {
        id: "formula30723",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipation formula
    {
        id: "formula30823",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency formula
    {
        id: "formula30923",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Velocity in SHM
    {
        id: "formula31023",
        formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
    }, // Acceleration in SHM
    {
        id: "formula31123",
        formula: "f = \\frac{1}{T}"
    }, // Frequency from time period
    {
        id: "formula31223",
        formula: "T = \\frac{2L}{v}"
    }, // Time period for wave on a string
    {
        id: "formula31323",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power dissipation in RLC circuits
    {
        id: "formula31423",
        formula: "v = \\lambda f"
    }, // Wave velocity equation
    {
        id: "formula31523",
        formula: "T = \\frac{1}{f}"
    }, // Period from frequency
    {
        id: "formula31623",
        formula: "f_{fundamental} = \\frac{c}{2L}"
    }, // Fundamental frequency for a string
    {
        id: "formula31723",
        formula: "P = V I"
    }, // Power in electrical circuits
    {
        id: "formula31823",
        formula: "f_n = n f_1"
    }, // nth harmonic frequency for string vibration
    {
        id: "formula31923",
        formula: "E = \\frac{1}{2} m v^2"
    }, // Kinetic energy formula
    {
        id: "formula32023",
        formula: "P = F v"
    }, // Power as force times velocity
    {
        id: "formula32123",
        formula: "v = \\sqrt{g L}"
    }, // Speed of wave on a string
    {
        id: "formula32223",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in a resistor
    {
        id: "formula32323",
        formula: "f = \\frac{c}{\\lambda}"
    }, // Frequency from wavelength
    {
        id: "formula32423",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated across a resistor
    {
        id: "formula32523",
        formula: "f_n = n f_1"
    }, // Harmonics in string vibration
    {
        id: "formula32623",
        formula: "I = \\frac{V}{R}"
    }, // Current from voltage and resistance
    {
        id: "formula32723",
        formula: "f = \\frac{c}{\\lambda}"
    }, // Frequency equation in terms of wavelength
    {
        id: "formula32823",
        formula: "P = \\frac{1}{2} m v^2"
    }, // Kinetic energy formula for a moving object
    {
        id: "formula32923",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength relationship for waves
    {
        id: "formula33023",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency of a vibrating string
    {
        id: "formula33123",
        formula: "T = \\frac{2L}{v}"
    }, // Time period for a wave on a string
    {
        id: "formula33223",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula33323",
        formula: "I = m r^2"
    }, // Moment of inertia for point mass
    {
        id: "formula33423",
        formula: "f = \\frac{1}{T}"
    }, // Frequency as the inverse of time period
    {
        id: "formula33523",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated by a resistor
    {
        id: "formula33623",
        formula: "f_{beat} = |f_1 - f_2|"
    }, // Beat frequency
    {
        id: "formula33723",
        formula: "v = \\lambda f"
    }, // Wave speed formula
    {
        id: "formula33823",
        formula: "P = F v"
    }, // Power equation (Force * Velocity)
    {
        id: "formula33923",
        formula: "f_n = n f_1"
    }, // Harmonics of a vibrating string
    {
        id: "formula34023",
        formula: "E = \\frac{1}{2} \\mu v^2"
    } // Energy of a wave in a medium

    {
        id: "formula20023",
        formula: "I = m r^2"
    }, // Moment of inertia of a point mass
    {
        id: "formula20123",
        formula: "f = \\frac{c}{\\lambda}"
    }, // Frequency-wavelength relation for waves
    {
        id: "formula20223",
        formula: "v = \\lambda f"
    }, // Wave velocity equation
    {
        id: "formula20323",
        formula: "F = -kx"
    }, // Hooke's Law for spring force
    {
        id: "formula20423",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in a resistor
    {
        id: "formula20523",
        formula: "f_{max} = 2f_0"
    }, // Maximum frequency for a vibrating string
    {
        id: "formula20623",
        formula: "v = \\sqrt{gL}"
    }, // Wave speed on a string under tension
    {
        id: "formula20723",
        formula: "f = \\frac{1}{T}"
    }, // Frequency from period
    {
        id: "formula20823",
        formula: "E = \\frac{1}{2} mv^2"
    }, // Kinetic energy formula
    {
        id: "formula20923",
        formula: "A = \\pi r^2"
    }, // Area of a circle
    {
        id: "formula21023",
        formula: "T = \\frac{1}{f}"
    }, // Time period formula
    {
        id: "formula21123",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power dissipated in a circuit with inductance
    {
        id: "formula21223",
        formula: "I = \\frac{V}{R}"
    }, // Ohm's Law
    {
        id: "formula21323",
        formula: "P = F v"
    }, // Power as force times velocity
    {
        id: "formula21423",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated across a resistor
    {
        id: "formula21523",
        formula: "x(t) = A \\sin(\\omega t + \\phi)"
    }, // Sinusoidal displacement function
    {
        id: "formula21623",
        formula: "a = - \\omega^2 x"
    }, // Acceleration in simple harmonic motion (SHM)
    {
        id: "formula21723",
        formula: "f_n = n f_1"
    }, // Harmonics for a vibrating string
    {
        id: "formula21823",
        formula: "v = \\lambda f"
    }, // Velocity of a wave
    {
        id: "formula21923",
        formula: "I = m r^2"
    }, // Moment of inertia of a point mass
    {
        id: "formula22023",
        formula: "F = -kx"
    }, // Spring force equation (Hooke's law)
    {
        id: "formula22123",
        formula: "T = \\frac{2L}{v}"
    }, // Time period of a standing wave on a string
    {
        id: "formula22223",
        formula: "f = \\frac{c}{\\lambda}"
    }, // Frequency and wavelength relation
    {
        id: "formula22323",
        formula: "P = \\frac{1}{2} m v^2"
    }, // Kinetic energy of a moving object
    {
        id: "formula22423",
        formula: "f_{resonance} = \\frac{1}{2 \\pi \\sqrt{LC}}"
    }, // Resonant frequency of an LC circuit
    {
        id: "formula22523",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in a resistor
    {
        id: "formula22623",
        formula: "A = \\pi r^2"
    }, // Area of a circle
    {
        id: "formula22723",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency of a vibrating string
    {
        id: "formula22823",
        formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
    }, // Speed of light in a medium
    {
        id: "formula22923",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula23023",
        formula: "I = m r^2"
    }, // Moment of inertia for a point mass
    {
        id: "formula23123",
        formula: "f(t) = A \\sin(\\omega t + \\phi)"
    }, // Sinusoidal wave displacement
    {
        id: "formula23223",
        formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
    }, // Acceleration in SHM
    {
        id: "formula23323",
        formula: "T = \\frac{1}{f}"
    }, // Time period from frequency
    {
        id: "formula23423",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power in an RLC circuit
    {
        id: "formula23523",
        formula: "P = \\frac{V^2}{R}"
    }, // Power in a resistive circuit
    {
        id: "formula23623",
        formula: "f = \\frac{c}{\\lambda}"
    }, // Frequency from wavelength
    {
        id: "formula23723",
        formula: "E = \\frac{1}{2} \\mu v^2"
    }, // Energy in a wave
    {
        id: "formula23823",
        formula: "v_{max} = A \\omega"
    }, // Maximum velocity in SHM
    {
        id: "formula23923",
        formula: "P = F v"
    }, // Power as force times velocity
    {
        id: "formula24023",
        formula: "v = \\lambda f"
    }, // Wave velocity equation
    {
        id: "formula24123",
        formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
    }, // Period of a simple pendulum
    {
        id: "formula24223",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power dissipated in RLC circuits
    {
        id: "formula24323",
        formula: "v = A \\cos(\\omega t + \\phi)"
    }, // Displacement of a wave
    {
        id: "formula24423",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    }, // Fundamental frequency formula
    {
        id: "formula24523",
        formula: "f_{beat} = |f_1 - f_2|"
    }, // Beat frequency formula
    {
        id: "formula24623",
        formula: "T = \\frac{1}{f}"
    }, // Time period from frequency
    {
        id: "formula24723",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipation formula
    {
        id: "formula24823",
        formula: "I = \\frac{V}{R}"
    }, // Ohm’s Law for current
    {
        id: "formula24923",
        formula: "f_n = n f_1"
    }, // Harmonics for a vibrating string
    {
        id: "formula25023",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula25123",
        formula: "P = V I"
    }, // Power in an electrical circuit
    {
        id: "formula25223",
        formula: "f_{fundamental} = \\frac{1}{2L} \\sqrt{T / \\mu}"
    }, // Frequency of a vibrating string
    {
        id: "formula25323",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength relationship
    {
        id: "formula25423",
        formula: "v = \\sqrt{g L}"
    }, // Speed of wave on a string
    {
        id: "formula25523",
        formula: "P = \\frac{1}{2} m v^2"
    }, // Kinetic energy formula
    {
        id: "formula25623",
        formula: "f_n = n f_1"
    }, // Harmonics in string vibrations
    {
        id: "formula25723",
        formula: "v_{max} = A \\omega"
    }, // Maximum velocity in harmonic motion
    {
        id: "formula25823",
        formula: "a = - \\omega^2 x"
    }, // Acceleration in SHM
    {
        id: "formula25923",
        formula: "v = \\frac{dx}{dt}"
    }, // Velocity as the rate of change of displacement
    {
        id: "formula26023",
        formula: "T = \\frac{2L}{v}"
    }, // Time period of a wave on a string
    {
        id: "formula26123",
        formula: "f = \\frac{1}{T}"
    }, // Frequency from period
    {
        id: "formula26223",
        formula: "a = - \\omega^2 x"
    }, // Acceleration in SHM
    {
        id: "formula26323",
        formula: "P = \\frac{V^2}{R}"
    }, // Power formula in electrical circuits
    {
        id: "formula26423",
        formula: "P = F v"
    }, // Power equation (Force * Velocity)
    {
        id: "formula26523",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in capacitor
    {
        id: "formula26623",
        formula: "v = A \\cos(\\omega t + \\phi)"
    }, // Velocity in SHM
    {
        id: "formula26723",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power in RLC circuit
    {
        id: "formula26823",
        formula: "T = \\frac{2L}{v}"
    }, // Time period of a standing wave
    {
        id: "formula26923",
        formula: "v = \\lambda f"
    }, // Wave velocity formula
    {
        id: "formula27023",
        formula: "f_{fundamental} = \\frac{v}{2L}"
    } // Fundamental frequency of a vibrating string

    {
        id: "formula12523",
        formula: "f = \\frac{c}{\\lambda}"
    }, // Relationship between frequency and wavelength in vacuum
    {
        id: "formula12623",
        formula: "v = \\sqrt{g L}"
    }, // Speed of wave on a string under tension
    {
        id: "formula12723",
        formula: "f = \\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}"
    }, // Frequency of a mass-spring system
    {
        id: "formula12823",
        formula: "T = \\frac{1}{f}"
    }, // Time period of oscillation
    {
        id: "formula12923",
        formula: "f = \\frac{v}{2L}"
    }, // Fundamental frequency of a vibrating string
    {
        id: "formula13023",
        formula: "P = \\frac{1}{2} m v^2"
    }, // Kinetic energy of a moving object
    {
        id: "formula13123",
        formula: "A = \\pi r^2"
    }, // Area of a circle
    {
        id: "formula13223",
        formula: "f = \\frac{1}{T}"
    }, // Frequency from period
    {
        id: "formula13323",
        formula: "v = \\lambda f"
    }, // Wave velocity equation
    {
        id: "formula13423",
        formula: "I = m r^2"
    }, // Moment of inertia of a point mass
    {
        id: "formula13523",
        formula: "F = -kx"
    }, // Hooke’s law for spring force
    {
        id: "formula13623",
        formula: "v = A \\cos(\\omega t + \\phi)"
    }, // Cosine wave displacement equation
    {
        id: "formula13723",
        formula: "a = \\frac{F}{m}"
    }, // Newton’s second law of motion
    {
        id: "formula13823",
        formula: "P = Fv"
    }, // Power as force times velocity
    {
        id: "formula13923",
        formula: "f = \\frac{c}{\\lambda}"
    }, // Wave frequency formula
    {
        id: "formula14023",
        formula: "x(t) = A e^{i \\omega t}"
    }, // Complex exponential form of a wave
    {
        id: "formula14123",
        formula: "f(t) = A \\sin(\\omega t + \\phi)"
    }, // Sinusoidal displacement equation
    {
        id: "formula14223",
        formula: "v_{max} = A \\omega"
    }, // Maximum velocity in harmonic motion
    {
        id: "formula14323",
        formula: "a_{max} = A \\omega^2"
    }, // Maximum acceleration in SHM
    {
        id: "formula14423",
        formula: "f_n = n f_1"
    }, // Harmonics in a vibrating string
    {
        id: "formula14523",
        formula: "v = \\frac{dx}{dt}"
    }, // Velocity as the rate of change of position
    {
        id: "formula14623",
        formula: "F_{spring} = -kx"
    }, // Spring force from Hooke’s law
    {
        id: "formula14723",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in a resistor (Ohm’s law)
    {
        id: "formula14823",
        formula: "E = \\frac{1}{2} m v^2"
    }, // Kinetic energy equation
    {
        id: "formula14923",
        formula: "v = \\sqrt{gL}"
    }, // Speed of a wave on a string
    {
        id: "formula15023",
        formula: "P = V I"
    }, // Power in an electrical circuit
    {
        id: "formula15123",
        formula: "I = \\frac{V}{R}"
    }, // Ohm’s law for current
    {
        id: "formula15223",
        formula: "f_0 = \\frac{1}{2L} \\sqrt{T / \\mu}"
    }, // Frequency of a string vibrating in its fundamental mode
    {
        id: "formula15323",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated across a resistor
    {
        id: "formula15423",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Wave frequency in terms of velocity and wavelength
    {
        id: "formula15523",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula15623",
        formula: "I = \\int_0^T x(t) dt"
    }, // Total energy of a signal over time
    {
        id: "formula15723",
        formula: "F = \\mu m g"
    }, // Force due to friction on a mass
    {
        id: "formula15823",
        formula: "f = \\frac{1}{2 L} \\sqrt{T / \\mu}"
    }, // Frequency of a vibrating string
    {
        id: "formula15923",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power in an RLC circuit
    {
        id: "formula16023",
        formula: "v = \\frac{c}{\\sqrt{\\epsilon_r \\mu_r}}"
    }, // Speed of light in a medium
    {
        id: "formula16123",
        formula: "E = \\frac{1}{2} \\mu v^2"
    }, // Energy in a wave in a medium
    {
        id: "formula16223",
        formula: "v = A \\omega \\cos(\\omega t + \\phi)"
    }, // Velocity in SHM
    {
        id: "formula16323",
        formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
    }, // Acceleration in SHM
    {
        id: "formula16423",
        formula: "T = \\frac{1}{f}"
    }, // Time period of a periodic signal
    {
        id: "formula16523",
        formula: "f = \\frac{1}{T}"
    }, // Frequency of a periodic signal
    {
        id: "formula16623",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula16723",
        formula: "v = v_0 + at"
    }, // Velocity with uniform acceleration
    {
        id: "formula16823",
        formula: "A = \\pi r^2"
    }, // Area of a circle
    {
        id: "formula16923",
        formula: "f_n = n f_1"
    }, // Harmonics in a vibrating string
    {
        id: "formula17023",
        formula: "v = A \\cos(\\omega t + \\phi)"
    }, // Velocity in SHM
    {
        id: "formula17123",
        formula: "T = \\frac{1}{f}"
    }, // Time period as inverse of frequency
    {
        id: "formula17223",
        formula: "I = m r^2"
    }, // Moment of inertia for point mass
    {
        id: "formula17323",
        formula: "f_{beat} = |f_1 - f_2|"
    }, // Beat frequency formula
    {
        id: "formula17423",
        formula: "I = \\sum_{n=0}^{N-1} x_n"
    }, // Sum of discrete signal values
    {
        id: "formula17523",
        formula: "f_{fundamental} = \\frac{c}{2L}"
    }, // Fundamental frequency of a vibrating string
    {
        id: "formula17623",
        formula: "X = \\frac{V}{I}"
    }, // Impedance formula
    {
        id: "formula17723",
        formula: "P = F v"
    }, // Power as force times velocity
    {
        id: "formula17823",
        formula: "E = \\frac{1}{2} \\mu v^2"
    }, // Energy of a wave in a medium
    {
        id: "formula17923",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in a resistor
    {
        id: "formula18023",
        formula: "f = \\frac{1}{2L} \\sqrt{T / \\mu}"
    }, // Frequency of a vibrating string
    {
        id: "formula18123",
        formula: "T = \\frac{1}{f}"
    }, // Period from frequency
    {
        id: "formula18223",
        formula: "P = \\frac{V^2}{R}"
    }, // Power dissipated in a resistor
    {
        id: "formula18323",
        formula: "E = \\frac{1}{2} C V^2"
    }, // Energy stored in a capacitor
    {
        id: "formula18423",
        formula: "f = \\frac{v}{\\lambda}"
    }, // Frequency-wavelength relationship
    {
        id: "formula18523",
        formula: "v = \\frac{dx}{dt}"
    }, // Rate of change of position
    {
        id: "formula18623",
        formula: "f_{beat} = |f_1 - f_2|"
    }, // Beat frequency formula
    {
        id: "formula18723",
        formula: "T = \\frac{2L}{v}"
    }, // Time period of a standing wave
    {
        id: "formula18823",
        formula: "a = - A \\omega^2 \\sin(\\omega t + \\phi)"
    }, // Acceleration in SHM
    {
        id: "formula18923",
        formula: "P = \\frac{I^2 R}{L}"
    }, // Power dissipation formula for RLC circuits
    {
        id: "formula19023",
        formula: "v_{max} = A \\omega"
    }, // Maximum velocity of a wave
    {
        id: "formula19123",
        formula: "I = \\frac{V}{R}"
    }, // Ohm's Law for current
    {
        id: "formula19223",
        formula: "f = \\frac{c}{\\lambda}"
    }, // Frequency equation for waves
    {
        id: "formula19323",
        formula: "P = \\frac{V^2}{R}"
    }, // Power formula for electrical circuits
    {
        id: "formula19423",
        formula: "f_n = n f_1"
    }, // Harmonics for a vibrating string
    {
        id: "formula19523",
        formula: "f = \\frac{1}{T}"
    }, // Frequency from time period
    {
        id: "formula19623",
        formula: "I = \\sum_{n=0}^{N-1} x_n"
    }, // Sum of signal values
    {
        id: "formula19723",
        formula: "T = 2 \\pi \\sqrt{\\frac{L}{g}}"
    }, // Period of a simple pendulum
    {
        id: "formula19823",
        formula: "P = \\frac{V^2}{R}"
    }, // Power formula for resistive circuits
    {
        id: "formula19923",
        formula: "E = \\frac{1}{2} C V^2"
    } // Energy stored in a capacitor
];