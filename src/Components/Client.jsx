import React from 'react'

function Client() {
    return (
        <div className='w-full h-[90vh] p-10 mb-10'>
            <h1 className='text-white text-[4.2rem] font-posterable'>What Our <span className='text-[#facc15]'>Clients</span> Say?</h1>
            <p className='text-md text-zinc-400 w-1/2 mx-2  text-justify'>Discover why businesses and individuals trust Centurion Print Point for their printing needs. Read stories from our satisfied clients who have experienced our commitment to quality, speed, and exceptional service.</p>
            <div className="clients w-full min-h-2/3  mt-5 flex ">
                <div className="client w-1/3 bg-zinc-800 p-10 mx-5 rounded-xl">
                    <div className="name flex">
                        <img className='w-[6rem] h-[6rem] rounded-full border-4 border-[#facc15] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8imbYCeermD_m047NEfx__O4seFS_5jQsvg&s" alt="" />
                        <div className="dets mx-7">
                            <h3 className='text-2xl  text-white mt-2'>Reena Singh</h3>
                            <h4 className='text-zinc-400'>Small Business Owner</h4>
                            <h4 className='mt-2 font-semibold text-[#facc15]'>Business Cards & Flyers</h4>
                        </div>
                    </div>

                    <div className="review mt-5">
                        <h3 className='text-[#facc15] font-semibold'>Rating: <span className='text-white'>4.5/5</span></h3>
                        <div className='text-zinc-400 mt-2'>
                        Centurion Print Point exceeded my expectations! The quality of the business cards and flyers was exceptional, and the delivery was on time. Highly recommend their services for anyone needing professional print work.</div></div>
                </div>

                <div className="client w-1/3 bg-zinc-800 p-10 mx-5 rounded-xl">
                    <div className="name flex">
                        <img className='w-[6rem] h-[6rem] rounded-full border-4 border-[#facc15] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjxBNPGMGSmZFPjN0KBemfAP0M87bFE5h_A&s" alt="" />
                        <div className="dets mx-7">
                            <h3 className='text-2xl  text-white mt-2'>Anil Mahato</h3>
                            <h4 className='text-zinc-400'>Graphic Designer</h4>
                            <h4 className='mt-2 font-semibold text-[#facc15]'>Custom Art Prints</h4>
                        </div>
                    </div>

                    <div className="review mt-5">
                        <h3 className='text-[#facc15] font-semibold'>Rating: <span className='text-white'>4.1/5</span></h3>
                        <div className='text-zinc-400 mt-2'>
                        As a graphic designer, my artwork needs to be printed with precision and attention to detail. Centurion Print Point has become my go-to for all my printing needs. The clarity of their prints, the richness of the colors, and their ability to replicate intricate designs is unparalleled. </div></div>
                </div>

                <div className="client w-1/3 bg-zinc-800 p-10 mx-5 rounded-xl">
                    <div className="name flex">
                        <img className='w-[6rem] h-[6rem] rounded-full border-4 border-[#facc15] ' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFhUXGBcVFRcWFxUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGysmHyUtLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADoQAAEDAwIDBgMGBgIDAQAAAAEAAhEDBCEFMRJBUQYiYXGBkRMyoUJSscHR8AcUI3Lh8YKyM2KiFf/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACoRAAICAQMEAQMEAwAAAAAAAAABAhEDEiExBBMiQVFxsdFCYYHBMqHw/9oADAMBAAIRAxEAPwDSQVE5PNVR8S82whdtTnCZeaej7AbI24ZhUXByMzSaWmEcxigu3Q7COtchIxmiB9IqS3tZKnq0zPRT0Hhg2JPlhUxwvkGlsDr6cJ2UlKwEbJlz2joNPC8kHoAXR5wMIen2ptpjjjE55TtPQeOyqoJA0SO39gI2Ve22hWl5q9HAc4tnIJaYI68WygquaBPEIOxnB9VLLH4OpgpYhbhHVHA7Ib4UrMjivLVKCjf5ZDVqcJjgSoZKkpU1DUwpKFxyKKCWVrQRRpBNtThT1dkGCwGoyVXXlMK0KAuxldFnIpnCHJI2rSlJM2UL9tJRVqUK2FMBDXtEnYIMkPsa4wrF7pCpbdsFWtF2F0ZMKAKtqXOUlS5+E0ktmPu953/FgGfWAqDtlr9agB8D4cfacSC4eixLO3NyCZex3UESPTP6LVDGuWU29mhv+3z+Pho046mqDxeODEeUIC47bXEHiAAEiQG/lt5QsnrGsmqTLW55Q1zZ8DuPoq5tyZyYPnM+HWPAqtB1FrqHaKo/7Zc37ru8B/bPy/vBUNDVsAcTsSWE5IEZaSdx4eap7yOX0/eULRcZRpA1M9A0LtRw/wBOoO6OW4E82O5DyReqXvFJJLvCTPuMEQV5/TuIMzy/SR+P1R9nqx2PLac42g9cFK0MpGt07XDS+Tjc0HLHEGPEHkttoWp06w7uHc2ncfqvKKuogNmk3hPPmD4jw2wh9M7UVaVUPjM55Spyxp7iySZ7lcRCr3CVBpmqNumcTDG0g7ounSUJwaYlA1a0kKnuaZaVp3YCptTEjCne4EN0+/jBVw2pIWSaCCtDpj8QUJqgsIqNVbX+aFb3IgKlqVO+kUgBTaOEk5lUQkpdxhs0VR+YRLKYKq6zjxKxtK0hazqIq9qAZWK/iJrrqFL4VJ0VHRPUMOMeMr0B7pWL/iDUo/CgtYXNEu4hIaD9oxnEDAzlPij5BXJ5AdSqie8DO/E1r58y4E/VDCm55kCDzjAWh0Ts5UuB8QMIYSYOYMGCRPktvpfYyAJAHnyV5ZVHYtDE5bnmVtpNZ32T9fwRjOzFY8vy+gXr1Ls+BiPojaWjgcgovNP4LLBH2eP2vZCq7lj6eKPPYZ8cv1XrLbJowApmWw6JXkmxu1BHir+w9Scf7TX9injY5XtFSzCFqWbeYXd2YezA8Mv9MrUpmY8B4Y8kDb3Lm54Gl2IcRsOceK9k17Tg5hgbSvLry3DHcJGJP1IV8OTVsyGbFp3RquwT3vIcXwM8UYMSDjqvQhXa5zmg5G/rkFeO2l8aQhhIImDyIIGD9VoNC1d/Gx87uLSOoMCPMGFbIriZmby7MKpexzjsrSqZU9rQHReXOdbgKp2nYldo91XtanDVltQr8LiprI8mxxZ17mWrP1qneXTeThdp05cqRjSCg20a5wSVzYUBCSXSdQXdDKlt3pldqZSKrYA81IXkPaG8fXquYT85OBmS4w2fIQB/hetNZKwGh6YH6iwHIY6dtywT7be5V8RTH7PUNL0unQoU6LWiGMawegymv4R0Xby73VS+sSZTZJpbGnFB8ssTCYTlDNqlTMcparLVRIugqNz05gMIWcNqIeqp3oWqgxkB12rzbtnp3C+QMHIXplVZDt9T/pB3Q/iuxOpoGVXE88p1IOc5H4/7Vj2fuZr0wZguB8JkSq59PuypdJn41KNw8fVy3t7M85o9iqbwrWzVK50Qjba8HNeHJMRFldsBGFjddsTuFrG3IKHvbUOCME0wo87oOPHB3Wjs6GxQVaw4asq7t9lpchmialcQkh37pKetCF/WKhZuhKlzKfQcnAWtMrE6LcBmpFvi4eMnn++q2VJYDVaRo6qw8qhDx/yxHuCqwlRXE96N9cGSkxzW/mlc1G028T3ATnKz1x2lt2ky8fijNPlG2LRpy4FNJWdsu01CqeFrx+CtDcjGZU9T9lEk+A4PUweq99XIPgqTXu1TaAwOI9P8op2dJJKzV4UFdgXnFbtdd1PkpFonwn0JQ51e93cx0b4Id7gKui/ZLWeg1xyWU7b25dRJGcqbTdec7hZUBAOO8C17ffce/mrqvQDw5rsg49FGVwlZRVOJ48NiPDHrlQaZU4a9P+9v/YKz1+x+DXezlgjyKqrem416bWAlxe0AASd+i3RdqzDNVsewVCoeOUrxr2QHtI8xCbZmSF55OqLawplXAp4Q9k0Ix7wAikKZvVLeCqttzBhXOsOWXdU76CRT0aC1bKSjs6uElGUXZMLq2RCVu6DBWrq2oIVHfWYBkJpT0vc6iwsqayP8SLXhr2dUD7fwyf8Ak0tH/Zaywq4Cqu3bGPpUJcOJtemQOve4T5bp8L1SHgnZj+2t9VqVzSZIDe7OwEYVCzQqYBNR5c48pP0G60Ha6qRXrFrSXcUDHLnk4lZqtY13MIl1N/FlgcAOGCJNSZJVtTk6uka4xXxYLUp0mOxxNPWHAfVbLsvffEHCXTCxzNGqNBL6omIADnOzMgkbE8oWp7H2Lm1ATnGTEA+nI7pMq2tMrj54o9A/lAW5WM7SNp0XfLxE7Ykz0AXodWnDQsd2h0k1eLBPljHRdKNOh073MLU1Z7e+QYmBwtnI3bxHExyCudP7RgsaeF4BBIL6fdLWkBxL2fKAXCSRzUbtM4WCk6mSwGQAXOAPXfBVrpdrbMYQKRk7jvQekyThN4/AKlfJG11KsQR3XDIIMz4gjcLQ20xnPKesIOwsGj5GAZnAgK5FGAptDVR59/EW1zTqDpwn0kj803+HGgv/AJhtd2AB3Z5kyPyPuFd9t7YOtz1BBHrhXFleU6QYwtIho4XciIj8lTu6caQkcV5GyXVmkufTcSZYXtB+y5nT0VFaVIK0GqODnNrA934dSfOI/NY+3qmVKK5JddVxfujWW99CIdeSqe1YjeBdujzyDUnyFm6jsrR3LcLP3lKCniVjug+1qYXEJbVMJIUSaPWHHCptUfAVtUMjCz2tvU8uPaxkNtaxAQHaRofSa4nLajI95/EImzkhcu7bia5u8ju/3DLf09Vng/Itgko5FfH5Le47Psqk1Dv+Ky2pdlq3EYfAPIAY95W4dXAY2TyH4YQtW8C9SSg0acerkyFj2Uaw8TyXHqcn06K40+yAcIEBc1HWWt7oy4kBo5knAAVnptJ7Gf1SC49Nm+EqNKTpFnaQddtwEGxklGPfIQhoEk5ITzVuxYcUKtYsduAUyjpdMfZHsqq9vH0XEmXN5/eb+oRNhrDXiWuBCTXG90PolWzLU0YGAAgbrAyj6dYEKvvX7rsrVCxuzJdrqw+C4dYPsf8ACMvCx1Clnvhrfq0YWc7XVjIbPgR5LbaDQAt6ZIBeWtMnOYG0pa8EPCXmwW9oFtrwHcjP/IzH0WVZQIctXrNcCKcyfmd5lUtQCV0dtjz+rnqyMJsrjkUcayombo2lWhFoyhzqoVXfUxunVbtDXFaQuSHxsGBhJQySYXEzQ7R64DhU2pW0mUba3YjdD6g+QhNJiIr7Z0GFPUqwQemVUmsePBU73rFKFMLQVf3nyxtA8toj8VValqwpsLiYAQpuTxPpnlDm+LXb/X8Vje2ly6WA4ZOfEwYlXWqWTSenjyJY9QdQ1SagrOPeBBY3pBkfgj7ft7NThfhpO+ZB8VhqLh9p0AjmY9UWdLD8tcDOx81o7UFyyfcm+D1yj2iptpl/xGxEzIKpb3tZTkFtd4IzDQ3hO+DIlYqj2blsGs4TEjhEfirXSuy7GTxuLhy5dd4XRjFcuyj1vdKi9d2pYYJggjPM+eFnr3VOGoDTPA6c8Ox8YO4VzU0hlOlIoucAHvBMxwjLjPQYWTb8W6L3NtxTZTkFwnJGzfOAncYv0I3JezfaDr7nk03iHATI+Vw6jptsrS+u+Fpzn9QsV2LsXuc2qflhxHlMAf8Ayr7VK8k5w3PXP+issoeVLgqpXEy3aN0un+4fSPyWnse0LqdBlPgBIaACTtjostqLi97W8yRiM5/wrZ9Loqz4SMk8koPb2DVb93GS4ySZJRFG6lB3FuhWuIwjFJmZl2KnNSU6hKpG1yFYWd4E9EWHG1O6hqUt0dTuBCjeQ5IPj5KykzKSMNJJFos0Wdhf5glWFxXJG6pbW2PErZqxPL8CUB02QVO92Fx7MqOvsi5IDZVa0SAKrfmZkj7zTgj039FX3dpTuaLhsSMdWuGc+RVvWBIiFlL2obWpB+V0lp8PPqMKkbfHKLYMiXiyu0rShWpvp1N2uIaeYO/stF2Jo0aAdRuGAtLgWu4ZIgjuujlg+59azs5XDqz8gB34wtQAAQ4RxA5BxxeS0ylTqXBqxxjJGnt9N091NzmFvF3o75BmZ4Q0n0GFZm4sqBY5vDiR3BxnbnGeUeqyhuA/5qbfYfiprRuR3QB1MJlKK4oo8Da3kw3Ub99w1tKmz4QIc0zBPA47QPlBAH7yh9Xs2W9o9jO6A0ieZJ3PmVcUQ1oLhknny91R9p63HReyYIBmRjAQbsSVJUir0W9b/KtaIBLYjy3/ADQFesCOkyeuNv8AqD7qkoX8M4RjYYOwaCCfw9lxvHVcKbBl2PJo3JPRK4U2xVK0Weg0jWrOqR3WA8M/eOx9vxVqxis9OsW0aQpt5DJ5k8yfNB1WEclnc1KRHqY6UivvAqV57ytL95G4VQ85VoGZE5CErVeHYoh1TCrbkklVQnsKtb9wOSr/AE+6BWQaCtDo9M4SyRRcl8/KSLFHASQs0BVKiTkBcrv4dxCubKnAQ2q0AWlZo9OqsgmUjroFd+KFWlplSh0ISxIacQoGUJr2jNuKJbs4ZYehH5HZObcJ7rtcrT2IvY8405zqNfhcMg8JHjzXoNu9lRsFwEDp9J/e4VR2h0f4zBcUh/UaS146gZB84JCorLUzETGZPUfotjrIrNeKbit/Zba3YVOMfDJLTtko/RLZ4P8AUmABk9ZTbfUcAkznPrsm1dakOxAIONvCUL2ouquzaMvWgBsxiR4j28VlO1OsD4cj7Us8xuDPruq7/wDcgQTu2N8zjbwkfRUT21bqpwMkjmfsgCdynjFLdk5SvZHNJoVKp4WiT47DP+V6DoOktpCd3H5ndYnbwyhNF0ptBoa3LscR8eceC01pQwsuXLrdLg1YsWhb8jarcIm30Ko5oeGggiRBEx5Lly3CJ0vUnU4G7QY8gefks0oJ7O/4FzYe5EoNW0vBBEHx3Xn9clri3oV75qVs2swggB0d13MH9F4fq1uW1ntcIIJBHiCq9PCWOTTdowLG4ggqYTxbyJXG00bQ2WyxFHcB/l1e6W2AEG5kqwsG4SSYWqZftfhcULHYXFxei0p6lwDKEvdV4gqi8usKpdeSYUo20Z63LluUyvUhD2tSUQbcv2EovbkrJbAbKhJwtHoHZ51wZJ4WD5nfkPFBadpjw4Szf816QWC3oBvQZjmeZSJrd+kJCGqVIzutWtCnT+FSYAGnJ5unm489l5frvZ0l5fTwTJd09ltrO9dXNaqP/ED8Nh5uc2eIjw5KBwCnjyzXk9mejPDFLSjzgUazAeIYABPvATHMqyceJ9f9Ld6hRa6cIWjYA+Psqrqd+BOwZbT9CqVHf1Dwt6bkjoI25rcaPpIps4abQ0bnqfNEWOnxv+/ZXtuGtxCEsjnyUjBQ4IrOwjJR7MbJTKlaxckFsGrDCDc4tyOeB5nCsqjUBQ79XHysyfFx2Hpv7KWWehah4b7GibVMBDan2btbsTUbw1CMVG4M8uIbO9U3iRtu/Cz9N1L1uyWbFaMXc/w8rMPzNcORbv6goan2Ne3d30Xp1e5LeCIPdzKd8RjvmHv+q9GSTk1GVfUwOD5PMz2UI+0pKOglq9FfYNO2FA/T/BSlDKibswtTTyAktbcWgSS91ja2eZ3llUOGtJTrbstVIk4XqNDT29Ap3Ww6KuOM6Ajze00N4cAtlp2kBrdlY07LOysG0w0ZTPG58juV7ICtdPAIPTPsotbaXU3AbwY84MK0Lu6T1QL8pJ4owhpj7KYVTs830R3Ba0mRENz/AHHJn1lSVeqP1iy+HVIjuvlw8CTJHv8AigHDkVnk2z00k1aAq4UdCQcBEvYmtbCludRZW9SR0R9JwVbblH0yniwNBtN6JDkExwCiub+BhWUqJNHNVvY7jcuOB+qn06gGNjnzPU8yg7G3JPG75j9B081aBeN1nU9ydLhfc1QjpiStciaT+QQjUfpdKX8R+Vg4j6bI9KpTmor2Sy0otsLvXd/h+6APpK5TchficRLjuTP+FLTcvR7uqba+TNoqKQdSPTCIa8+f0QDXqVtdboZUjPKFhTwDu1dUArpKuuLJ9tkVN6JZSJ3T6NAN8059SE8Y0vImkcMNCHc6TJSe6VE5ylPJZaMCeo7uepQLTlEOd3D4EFBNOFnzT3X0K447Mh1ix+LTj7Qy0+PRZV1vyIgjC27CEDeacCeIeqVKy+PJp2Zj3WhCQtlf3FmhPgQuliorrsDpUYU7WqXgTHpdB1jai5b20mT6fqp6VCQTymB4np+/zRlKjAWLrcziu3Hl8j417ZG1sKVrU4MTwF5UcXyVch7GI6ueCk1vOoZP9o/Y9yhbamXODep+nNOv63FVMbN7rfTf6yvTxNY8Upe34r+/9fcyyWqaX8/gQKkDlACnByEZUFol4k5pUPEnByopitBTHJKD4qSr3kiehltUroZ9wo6r0M9y1ZeoZOGJBJrpgqII1EvirG+psv2izt6gmDsce+yGriMKCm6URV7zS77TcO8ejlVZO5Cva+3sTTplYDWvC0SPRZ3WO1dRh+FSLXVT97LWA7EjmfBT9ob34bYbmoflHT/2KzVtpcw92XHJnn5rzO7JS1SdL0j1cHTwauSNDpWo13ZrOa7wa3h+so5twHbR9fUHKpgyBzj3T7Vxknxx7KUesyxaera+Ck+mg7aVFsWrtGhxHOIz/pRWDS52+Bk+XJHVbtjdyAOZP6L18/UxjFU+TzlCV0Di/ohxpmqwOb9guAI9D6I6FhtTsG1qlSqBhxx5AAT9F3T3V6B7jyW/cdlvp930XmOUX73N8ukelNPc28JQq+z1hj/m7jujtvQq2tqXGQARnnOI6roR1uomOacP8ie3Pw6bqp3+Vnmf39FXUmqTUbwPeGM/8bMN8TzcmNT58kXNQjxHb6v2/wCv4FxxaWp8v/kSgrrSmNXZQTOY+VGaiTkxJKYUiYHCSZKS5zoFB1SohatRRGpKiL8wq5eos6GOiXxXWJzzAAStmyUqXkkG9rCaTYCjN0aZLgA4RBadiFPVMBB1MrTkk8daXuiUUpcmaq25fUc925OB0HIDyRFOlCPfRTPhrxMmtvc9Pu7UQNb4Jpp9ESG5T6LQJdyH48kI426FeSge5r/Db8NvzHLj4/42VXXYXYPNTvlzySInbyndStp5VJzdl4JY1+40UoEKRlDwUsKWmFLdk5ZGDOtAeSTLOEbC6EyQjyyFbsgKdqjaVI0q8NkZ5O2SBJcBSlXsmJyY5SKOoUkgocEk1uySRhojpu7srlnl/wBVDeO4QApLI8LHO9AkT80nwuSrXi38jrmtLlY2DIEqotG8TpV098NWro25SeSRHOqSgiK4qSVAV1qUJ5ScnbAlWwxwUb2KchMqKM4jJgtRQ3ToZBBhxIMRIBBBwcch7qSoV2uO6P3us0ZabaLr1YLSZOAMAuMkRJcZ2UoYpKK6d0JeW7Gct6GcCkYkUmpUhWxwXQmrrSnQrHAJ4KYE5UQjJJTlGCnKiYrHKOoE+U1y6XByOUtkkym6Ckkjpa3C072Ky5qcRRlZ3ca3wn3VZZtLnAeKsKmXx6LO7Sf7myaSaXwG2TIA8UTdu5LlsM+SY90ulelFaMelezA3c7HAJQulcKPABFQ1SpBsha71HLKkPBWwas5SvPdb5BQVAn1AIZO302IE/RY1vaNLXA6m4ciuk5Q4BBE4PTu7cIJmCef75qYHKLVbHNEzhhMank4UaLQiHJzUxOauQGPBXVxdVEKxwK7KakmAPCS4xdIRFInDKSdUC4otUyiZUaJv7o6y+dJJd+tfX8GjLzL6Fnb7HyTGbpJLc/0mH2yR+641JJM+RVwMehKqSSyZy2MiqDup3CC0A7f7XElnfBb0MpUmjYLrtwupJfQb3JSo0klQRDl0JJIo5jmp64kmQrHLhSSTMUVNSA5SSTIDE7ZJJJTkzkf/2Q==" alt="" />
                        <div className="dets mx-7">
                            <h3 className='text-2xl  text-white mt-2'>Aman Shukla</h3>
                            <h4 className='text-zinc-400'>Event Organizer</h4>
                            <h4 className='mt-2 font-semibold text-[#facc15]'>Large Banners</h4>
                        </div>
                    </div>

                    <div className="review mt-5">
                        <h3 className='text-[#facc15] font-semibold'>Rating: <span className='text-white'>4.3/5</span></h3>
                        <div className='text-zinc-400 mt-2'>
                        I’ve worked with many print shops, but the creativity and attention to detail at Centurion Print Point are unmatched. They handled my large banner orders with precision and speed, making our event a great success.</div></div>
                </div>

                

            </div>

        </div>
    )
}

export default Client
