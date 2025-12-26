// src/app/Modelos/page.tsx

import React from 'react';

const ModelosPage = () => {
  // Datos de los modelos
  const modelos = [
    { id: 'a1', name: 'A1', count: '1 Modelo', imageSrc: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grj6RLvJtUnkHYuXVeC1-_mcRmzrOmmoEVqIupDEgw_wASvKuBBIc4A5gEmXcdRBwH8Zn0mBkYWCuAjEgGEODjKy3KKUgsSszVK89MKckQ1DAgEgizu7iGOHr6BAMAnLe6Z-kAAAA' },
    { id: 'a3', name: 'A3', count: '6 Modelo', imageSrc: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT9Pa4LcrgmzOW3se3ft8EstCCWHRLQysQF2Ml4AEiwiQ4IsCEhzhDGASZN5CEHESxGcyZ2ZgYK0AMiIZQICPr7QopyCxKDFXrzwzpSRDUMOASCDM7uIa4ujpEwwAdTReUOkAAAA' },
    { id: 'a5', name: 'A5', count: '1 Modelo', imageSrc: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAA_1vzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grj1pMhEzLri2P_XfNNGibfo7_trdAIgMrUBfjEiDBIgAk-OYACQ5DBjAJMq8NRJwA8ZkMmBkYWCuAjEgGEODjKy3KKUgsSszVK89MKckQ1DAgEgizu7iGOHr6BAMAyhoxf-kAAAA' },
    { id: 'a6', name: 'A6', count: '2 Modelo', imageSrc: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAA_y2Vy6rmNhLHne50J2QxYSaEMC_QBBqmLN-9OITu1UASaEjIphdNyboeyTdJls_n1TxQv1E2eYFZBUI2A1MfZPVzlapKJdXf9sf_Fi-OUDx___7t9__759da_9o_K4qnrSiKT8j_7P3bj79_8-fLz3_-7S_3S1-8SEfg6ycU8u7ZF3ZGLeFxk_rL4jNyFc-L4rP_FMWnwz2g-NtXR_AbBpz_FWTc1iXaLP_-bSmavmM4SFk201iySmLdjkJUrGTNJAfOpomVQv6jKF78gd7DoqcpWiGFjC6tm1wym6HBilc3qMqqBda8vsZrhLZ7PW-AeMgSAfnamZIQ2BYApWBpIYRyI6ee-3kGNJkJsixvDkXwOpPl9S4Z4Lbp2AJG2T15gpZIa9G38W7Ner5boQ0H4Va6BjAhe6K8Q4znRIg4CsAzd24AjoY5RUiPlSBk5hfg1KBC4J5ztgNfTxYZ8JgbaoInLLOASZw9bTsZrMwI0zpNQwXThjaRc-P2YITJZlrbhD3JmZ40QaBk3BNCHcmStlYchKL9SpCTXOwA8l7ag7SmT4ng-5mB3Mz4RCHR9mdNiIfqCUlfJSgUJbWr5NFRS0qdjC5S6Zg9A2XOTKWVTV3goHwcHDlXoe4hwVa5BRW31pOVY68JV1Q0Iy3VGErCMmgH2pnypghRUp52uXz0oOc1jRZ0wCG1hJQnWoubZgL0id2tAoNamwaM5F1mhIDtHbF9LMFYLBey7Nwtj4RYLwmMwxF3MPEcLFmHcHRL5sYrasku8WgJITa-A4fBDZwQdzqR47mcW3D-Km89uHnbw0CIDYnIrbPmd-T2UuDCzC6KDJFhBS5iS127aGvdEA6HVPowztXgrtydHXicWteC56bWCH7a9p2BF2KhM3ih1VERVkl9eom-9IRlv3rwFgeq6R1Kko13vK8p3U19R1hDv1GVgNW1EzLpDnyUY46EWE2Uno7aULFj7g2HGWMna5hFVCTvWeEYR5jdMVwNzCtakjdNQxwdLJj7Q8OyLOpisOGsaWKbRkXC3PWsdsKBSAgo8tgTVjtchGN8nCBMq6S8IFxP1xpIhOYOn2kAQQamW4jIm6eaoHs1EgyWJeGo3A6RhyFuEKegHDmntJMGozCNrCBK3C0lqFi5jnBVJMyo3bhRMcuXVhBk7RuCaUjJ0V5sp5oOH-l8ccHeDwQz3Mhal_ZJQdyO_m4F01mqEk3jJkKob5SekqYZxbyqe7EzDPcq5zVuCPHy9UwJ11EuCMnlRlWQNj2SUNLmeTdACqoVjHDWE4XEbUlkZbnTNNPpWTaEg0UO6bYxeSNc1TVA5o6lGvLqNG2b17jT-5BTHq8nONGPCQlB0rfgjNjLO2KjFVzId3JePFQnwkVzTgIuK5uLw-Vo_OR0ueY1XDGW4YIrhWwquA4zzuV39O21YV1muaSHH9cf33z493pE-eq0IpkHNlblKyOtNumBNU35Cv1m8CGFQ76acKb38uGndAi7fnjzof5QlhSw0C8kWfozPLxbo70__XBP_-r5m1_e_R_Z37D0nwYAAA.png' },
    { id: 'q2', name: 'Q2', count: '1 Modelo', imageSrc: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grD8cCyUu7M04nnLD6Mctp47xQtjWX5RhYgbqYlIEE81sgwbsDSHBEMoBJkHm7QcRWEJ_JgpmBgbUCyIhkAAE-vtKinILEosRcvfLMlJIMQQ0DIoEwu4triKOnTzAAkMFQZukAAAA' },
    { id: 'q3', name: 'Q3', count: '3 Modelo', imageSrc: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grj_2WTztL-3sd3F7XyC8xruJa_ni1DQMrUBfjZyDB_BxI8MkDCY4OBjAJMm8hiJgF4jOZMTMwsFYAGZEMIMDHV1qUU5BYlJirV56ZUpIhqGFAJBBmd3ENcfT0CQYAUS-_ZekAAAA' },
    { id: 'q5', name: 'Q5', count: '3 Modelo', imageSrc: 'https://mediaservice.audi.com/media/fast/v3_x2TXWgcVRTHb36bNHYzs5uZmM3udNwtOzNLUNdONrskqS66paQgaj9iKsWHdZKdJJtkP5ydjWnzIoioD4pgK1YflFYfrEXRiggJWL-gKIpYwaKC1ieV-FDExA8UZ335cc4993_u4fC_538VPW1PcP--878N_bHjunt_QIjVphChUyLUrM93CSEq7KzWnHl3T5APZR4sZN1VP-usNPfk7Fwhe7iQvWcyO7UvW5rOj65mJ49NZZ3l5ajoDZSip6N_IkDX2QC9oQDdkvifncrtHRzo5F16SAg2guDmjk5EBtrectPxnNotnttqNuqt6oqrDM859tzM7NxEwbUnRnKzhYnRmUJubmx8fGa8Ys_MOBOFkbnRQj6vBi3WRSgYREQadbdVrbhjtr06attix3y77pw4Lro707P7HDdcZfBpYlPELhD_hcRtaDeinUQ7h_Yu-vOksqReIbVO6jLpK6R_x-jCWMS4hvUvmf1klhB3EJaRPKIx4mvE32DXq-h1dAf9SXSf1K2Yz2B-jrWNyKFsoA4weJLYGLESWgVdRR_GDGF-g_Um4V7CLxPJo5xAPYb6MbGbSCyS-JTEFmYUM435IuYnWCP07aNvC-lt1EliZ5FfR76EvIUioexFKaM4KB-ifIU6jFpAPYjqk1hHP4y-RvJbktsk_yb5D6luUv2kL5G-hqFhPIvhY2xgvI85jbmNpWKZWHdiHcT6HukM8kvIF5B_Jtog-gL90_T_hRYsoUX8NIkzaPehvYMWPDdL8iLJDzDeQ1KIXuH6YQYXiD1O7CJDXxBfJP4oVhnrNNZHgRURvYg1dm4SPkD4COEa4e_oe4C-Nfp-RJKQ3kJ-CvkyEZmITuRhoiWij5E4hXaVXU3019C_JLWX1FFSK6T_xBhGmUSVSRwhcRxdwvgM4yekENJuIptEN1F6UJ4jtkbs68BLj7j1larXqNfcul8seUtuvXx3u-W2a-X9br3meEuZh6oVf6E4MpGzMwtudX7BL47k83bGWW4uOEXfa7uZWafmek5xym9Xqo1yqTxatu3gQj34W341MHjxUKNV7UR3deSZmus7Fcd3VlyvFRwWcwOh0tFD_wFTnlinsAMAAA' },
    { id: 'q7', name: 'Q7', count: '1 Modelo', imageSrc: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAA_y2VTe_eNAzAu40NxAEEE0J8gQlpEm763sNfaJyQYNIkEJdJTE6bJn2Svjxxmj5PT3ygfSMuHLlw4sIFCVfi9Ksdx3ZtJ3n_V_J088mTt2-_--Hfr77Q-vf6cZLc1iRJHrH-8dvv3v_95T_PPvr5j__Vz35NnobNy-URm7x5_PE4oVZwWZX-NPmQVcmTJPnwtyT5oDkNkk-eb96t6HH6xital5nGqP65KuiRlWnuhBaZK3uylT1KLtKyFoIrbTq2qzTfVZ-miQv_kXnYDZdR2OvekU2LKuao5igmEJ6yyBLsxJE8Tq7Z3coq9f-AoibShFQerF6QNWLcMKnawpopnqaGJQWbDJE0bNylMWmGc5EltaVVwFJVTfHMApPyZV0SpOZTsmXfmPcU1sAbn27dwzC5g64x8o2INEIe2WES9YzonAzSLlUA4J0UnKCctkFZSADprGHrt9rDtQZzEwL3dJ1LUsrjuGEHDfB6MbIa2s_7qzcY8bJc8mEtAyfk4BejfmwQT9wIF4bB3GvgCuaacEI11CC6tQ8NqDOeA7UaMoJGS6ea6tpbykoGus9Z9Cm2JKCPjIYsE85-UFtFec5DLvgeg6aomOYPXK8wVFjBQxLP5xrfsxiCQPJzfB2WsvTMlKtGQcNXAKthtanjLnRFrQ16f3CiOmFMS2hHUGvPt9q0B4bTlD7EDveQKsWGvSO1T0Dg1obAUbJKp7wWJ6g8pKDGTGdWRqnar4wqLQOjMUWFRjam_EOZustN9zcZcYpjTNtJcNT4Sqw6C0PikW68o9ZnkwiRkynEqw70nsNdlqvvmFQwe2wy6TliVgeA1g_iYMtPQnMwBKWnLylMdcFY7PIETZjbQ72iNVeg8OutAxpct2D69brVYDr-_mSMhbFeTqFLnWM-Xqw5YgNO3MWFc-us7LOkdHV1QmnzKmkbM3ALb5e2ZlHcdsZkWcSHKk2EoOyrgS3TbVZYUKqVAVTTwMP-zRgSy1MdmuOAqYFx5tghH6rYJ5xuKeMeTgErDhpDrRqHHhor3oarowNkeGx37KMsbWXHny3KN7ge1tzWT0PYY0MF9MTXugGPIVUZUAoi1vOMJimjC3jU0XSN3EC6vxgWdmFqxNAvSlUDaTwOrZAA2VcSBqOjAeTtG1X9jLKWQwMlbuCYQo8lYe4ck-LFx59mrF2DcM0d_a5zOWtA1q3-pS8qUbeQKawrCSf3zl0CIabQ3HRfC1o980ZZT_aFYEOl085BBsLnUFYTcujEVYnqwaC12UvGHveIQRa58BSVFduY9idiANjEyQh3Feh7owj44ZHaUXIIS7WcL640FUgxBDb4wY7ujYgwyt-IHbCWp2gwmg4pM92hINbGno4RlUcEg4bc5nDQZT6A47QV1vK8JEv7LEN7ZR-w6_t6Jd5UnN4_HH58c3Td8tG6mEf-zA8ijZLHwY1miE8iqJIH9CtAz4Gv6mHDie-iY8_ha0fl6c3T_lTmrLBzD-NMPK_4PHtQuP59cPp_kAdv-wed6vupK6bmjv1mH32_M0vb_8DuiLMDKcGAAA.png' },
    { id: 'q8', name: 'Q8', count: '2 Modelo', imageSrc: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAA_y2Vu87lNBCAwy67iyhAgBDiBX4hrcTEuaf4hZYKCZBWAtFs8Wuc2E6OncvxOM45qXgg3oiGF6CioQExkai-zHhu9oyd3_5MXmw-ef7u3bff__Pl58b8Xj9LktuaJMl7rH_27tvf_vri75cf_PzH_-qXIXkRNi-X99jk7bMPxwmNgsuqzMfJK1Ylz5Pk1a9J8n5zGiQffbZ5t6LH6WuvaF1mGqP65KuiRlWnuhBaZK3uylT1KLtKyFoIrbTq2qzTfVZ-miQv_kXnYDZdR2OvekU2LKuao5igmEJ6yyBLsxJE8Tq7Z3coq9f-AoibShFQerF6QNWLcMKnawpopnqaGJQWbDJE0bNylMWmGc5EltaVVwFJVTfHMApPyZV0SpOZTsmXfmPcU1sAbn27dwzChgD3WNkGJA7CXhnhkvWMKNwMUi6VRpBOSi5QLrsgATJgGnvo-r3mRN2A2dBCt3Rdy9KKYzghx00wujHy2tqPOyv3mHHxPSohLcPnHKxXY6436DUn4rVRi3sFSsrMCEa4hhJUp-axAXXmc6DGoZyQ4eqJTdahvaWgaKz3nEGbrhnBHBlo7FMuXqut4jq13gWfpzYUHWPYI-fTjhorQC-9Ptf8mMUSNMltYHday9MyUm0YB2k-AqN061PG3BgLxg7pfWDE9MLStIR2BLP6fKvBeGy4eOND7NiBViMMmB2rewYDGjMIGJSs4gmP5QkqL4wR0_nEVM0XBuWzgsFiiwzam_EOw9ZbbvhwlxmXNM60lQxPhavAorcsWaQrb8xKWRExYjqVYN2R3muw03r1DYMKboddJiNPxPLQYP0kDrb0JDADS1hy8ZbG3BSMzSJn2AZrc7BHrPYaHHalZcghNz24br1eBbi-ny8pY1Fcp1PoUseYrwdbjthwMGdR8ew6K-scGV1dnXBqOJWUrRm4xdcrB_Mobjsj8kyCI9VGYlDWcbBtqocVJqRKVTD1pHnYJ40ttTDZrTkKmBYcb4IR-q2CeUZ9F4xZHwJWnAxnWA1qHtqrmfSVsSEyPPZbKhhbe-nBd4tiB9_bmo_Vq7EpbwwXuQFeecHT6imkKgNCWdxyxoBpytgyvlUkfRMnoM5ry8ouXJ0A6odC1UAKr2MLpCnj0KSPjAeTjG1XjjLKWWiGyl3BGAo8lYe4ckyLF94YzVi7hjE0vDFa5vLWAa1bfUp-qEZ2oKGwrCSf3zl0CIabQ3HRfC1o980ZZT_aFYEOl085BBsLnUFYTcujEVYnqwaC12UvGHveIQRa58BSVFduY9idiANjEyQh3Feh7owj44ZHaUXIIS7WcL640FUgxBDb4wY7ujYgwyt-IHbCWp2gwmg4pM92hINbGno4RlUcEg4bc5nDQZT6A47QV1vK8JEv7LEN7ZR-w6_t6Jd5UnN4_HH58c3Td8tG6mEf-zA8ijZLHwY1miE8iqJIH9CtAz4Gv6mHDie-iY8_ha0fl6c3T_lTmrLBzD-NMPK_4PHtQuP59cPp_kAdv-wed6vupK6bmjv1mH32_M0vb_8DuiLMDKcGAAA.png' },
  ];

  // Filtros
  const tiposMotor = [
    { id: 'ICEV', name: 'ICEV', label: 'Motor de combustión' }
  ];

  const modelosFiltro = [
    { id: 'a1', name: 'A1' },
    { id: 'a3', name: 'A3' },
    { id: 'a5', name: 'A5' },
    { id: 'a6', name: 'A6' },
    { id: 'q2', name: 'Q2' },
    { id: 'q3', name: 'Q3' },
    { id: 'q5', name: 'Q5' },
    { id: 'q7', name: 'Q7' },
    { id: 'q8', name: 'Q8' },
  ];

  const carrocerias = [
    { id: 'sportback', name: 'sportback', label: 'Sportback' },
    { id: 'sport', name: 'sport', label: 'Sport' },
    { id: 'suv', name: 'suv', label: 'SUV' },
    { id: 'limo', name: 'limo', label: 'Sedán' },
  ];

  return (
    <div className="font-sans min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-6 max-w-7xl mx-auto">
        
        {/* Sección de Filtros */}
        <div className="flex flex-col gap-6 lg:w-80">
          
          {/* Filtros */}
          <div className="flex flex-col gap-6">
            
            {/* Tipo de Motor */}
            <div className="border-b border-gray-200 pb-6">
              <fieldset className="border-none p-0 m-0">
                <legend className="font-bold mb-3 text-lg text-gray-800">
                  Tipo de Motor
                </legend>
                <div className="flex flex-wrap gap-2">
                  {tiposMotor.map((tipo) => (
                    <label 
                      key={tipo.id} 
                      className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full cursor-pointer transition-colors hover:bg-gray-200"
                      data-testid={`filterDriveType-${tipo.id}`}
                    >
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          name={`select ${tipo.id}`} 
                          id={tipo.id} 
                          value={tipo.id}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700 text-sm font-medium">
                          {tipo.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* Modelos */}
            <div className="border-b border-gray-200 pb-6">
              <fieldset className="border-none p-0 m-0">
                <legend className="font-bold mb-3 text-lg text-gray-800">
                  Modelos
                </legend>
                <div className="flex flex-wrap gap-2">
                  {modelosFiltro.map((modelo) => (
                    <label 
                      key={modelo.id} 
                      className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full cursor-pointer transition-colors hover:bg-gray-200"
                      data-testid={`filterModelle-${modelo.id}`}
                    >
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          name={`select ${modelo.id}`} 
                          id={modelo.id} 
                          value={modelo.id}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700 text-sm font-medium">
                          {modelo.name}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* Carrocería */}
            <div className="border-b border-gray-200 pb-6">
              <fieldset className="border-none p-0 m-0">
                <legend className="font-bold mb-3 text-lg text-gray-800">
                  Carrocería
                </legend>
                <div className="flex flex-wrap gap-2">
                  {carrocerias.map((carroceria) => (
                    <label 
                      key={carroceria.id} 
                      className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full cursor-pointer transition-colors hover:bg-gray-200"
                      data-testid={`filterBodyType-${carroceria.id}`}
                    >
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          name={`select ${carroceria.id}`} 
                          id={carroceria.id} 
                          value={carroceria.id}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700 text-sm font-medium">
                          {carroceria.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          {/* Enlaces */}
          <div className="flex flex-col gap-4">
            <a 
              className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
              href="/es/buscador-de-stock-nuevo/"
            >
              Ir al buscador de autos nuevos
            </a>
            <a 
              className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
              href="https://www.audi.de/de/brand/de/gebrauchtwagenboerse.html"
            >
              Mercado de autos usados
            </a>
          </div>
        </div>

        {/* Sección de Resultados */}
        <div className="flex-1">
          <div className="w-full">
            
            {/* Cabecera */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-2xl font-bold text-gray-900">
                Todos los modelos
              </span>
              <p className="text-2xl text-gray-600">
                (20)
              </p>
            </div>

            {/* Grid de Modelos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {modelos.map((modelo) => (
                <button 
                  key={modelo.id}
                  className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  data-testid={`cargroupCard-${modelo.id}`}
                  type="button"
                >
                  {/* Header */}
                  <div className="px-4 py-3 bg-gray-50">
                    <p className="text-lg font-bold text-gray-900">
                      {modelo.name}
                    </p>
                  </div>

                  {/* Imagen */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={modelo.imageSrc}
                      srcSet={`
                        ${modelo.imageSrc}?width=320&mimetype=image/webp 320w,
                        ${modelo.imageSrc}?width=420&mimetype=image/webp 420w,
                        ${modelo.imageSrc}?width=560&mimetype=image/webp 560w,
                        ${modelo.imageSrc}?width=680&mimetype=image/webp 680w,
                        ${modelo.imageSrc}?width=820&mimetype=image/webp 820w,
                        ${modelo.imageSrc}?width=960&mimetype=image/webp 960w,
                        ${modelo.imageSrc}?width=1100&mimetype=image/webp 1100w,
                        ${modelo.imageSrc}?width=1280&mimetype=image/webp 1280w
                      `}
                      sizes="(min-width: 1920px) calc((((100vw - 192px) * 3 / 4) - 48px) / 4 - 32px), (min-width: 1440px) calc((((100vw - 192px) * 3 / 4) - 32px) / 3 - 32px), (min-width: 1280px) calc((((100vw - 120px) * 3 / 4) - 16px) / 2 - 32px), (min-width: 1026px) calc(((100vw - 120px - 320px) - 16px) / 2 - 32px), (min-width: 1024px) calc(((100vw - 80px - 320px) - 16px) / 2 - 32px), (min-width: 768px) calc(((100vw - 80px) - 16px) / 2 - 32px), (min-width: 375px) calc(100vw - 56px - 32px), calc(100vw - 32px - 32px)"
                      alt={modelo.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200">
                    <p className="text-gray-600 text-sm">
                      {modelo.count}
                    </p>
                    <svg 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      aria-hidden="true" 
                      width="16px" 
                      height="16px" 
                      className="text-gray-400"
                    >
                      <use href="/assets/icons/forward-xs.svg#main"></use>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelosPage;