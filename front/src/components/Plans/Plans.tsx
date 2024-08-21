import React from 'react';
import Image from 'next/image';
import styles from './Plans.module.css';
import TransparentButton from '../TransparentButton/TransparentButton';

const Plans = () => {
  return (
    <>
    <section className={styles.pricingSection}>
          <div className={styles.pricingCard}>
            <h2 className={styles.cardTitle}>Startup</h2>
            <p className={styles.cardText}>Integre com marketplaces, e-commerce e logística</p>
            <p className={styles.cardPrice}>
              <span className={styles.currency}>R$</span>
              <span className={styles.amount}>99</span>
              <span className={styles.period}>/mês</span>              
            </p>
            <TransparentButton title="Iniciar Agora" redirectTo="/signup" />
            <div className={styles.featuresBox}>
              <h3 className={styles.featuresTitle}>Recursos ilimitados</h3>
              <ul className={styles.featuresList}>
                <li>Sincronização de estoque</li>
                <li>Integrações com +250 e-commerces, marketplaces e operadores logísticos</li>
                <li>Atualização automática de pedidos de venda</li>
              </ul>
            </div>
            <div className={styles.resourceList}>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/users.svg" alt="Users" width={20} height={20} />
                    <span>5 Funcionários</span>
                  </div>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/file.svg" alt="File" width={20} height={20} />
                    <span>60 MB de dados</span>
                  </div>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/data.svg" alt="Data" width={20} height={20} />
                    <span>1,5 GB de arquivos</span>
                  </div>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/mark.svg" alt="Mark" width={20} height={20} />
                    <span>200 importações de pedidos em marketplaces por mês</span>
                  </div>  
                </div>              
                <div className={styles.plansBox}>
                  <h3 className={styles.plansTitle}>No Plano Startup, você tem:</h3>
                  <ul className={styles.plansList}>
                    <li>Sincronização de estoque</li>
                    <li>Integrações com +250 e-commerces, marketplaces e operadores logísticos</li>
                    <li>Atualização automática de pedidos de venda</li>
                  </ul>
                </div>
                <div className={styles.supportBox}>
                  Suporte ilimitado e gratuito via telefone, e-mail, chat e ticket
                </div>              
          </div>


          <div className={styles.pricingCard}>
            <h2 className={styles.cardTitle}>Growth</h2>
            <p className={styles.cardText}>Integre com marketplaces, e-commerce e logística</p>
            <p className={styles.cardPrice}>
              <span className={styles.currency}>R$</span>
              <span className={styles.amount}>99</span>
              <span className={styles.period}>/mês</span>
            </p>
            <TransparentButton title="Iniciar Agora" redirectTo="/signup" />
            <div className={styles.featuresBox}>
              <h3 className={styles.featuresTitle}>Recursos ilimitados</h3>
              <ul className={styles.featuresList}>
                <li>Sincronização de estoque</li>
                <li>Integrações com +250 e-commerces, marketplaces e operadores logísticos</li>
                <li>Atualização automática de pedidos de venda</li>
              </ul>
            </div>
            <div className={styles.resourceList}>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/users.svg" alt="Users" width={20} height={20} />
                    <span>5 Funcionários</span>
                  </div>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/file.svg" alt="File" width={20} height={20} />
                    <span>60 MB de dados</span>
                  </div>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/data.svg" alt="Data" width={20} height={20} />
                    <span>1,5 GB de arquivos</span>
                  </div>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/mark.svg" alt="Mark" width={20} height={20} />
                    <span>200 importações de pedidos em marketplaces por mês</span>
                  </div>
                </div>
                <div className={styles.plansBox}>
                  <h3 className={styles.plansTitle}>No Plano Startup, você tem:</h3>
                  <ul className={styles.plansList}>
                    <li>Sincronização de estoque</li>
                    <li>Integrações com +250 e-commerces, marketplaces e operadores logísticos</li>
                    <li>Atualização automática de pedidos de venda</li>
                  </ul>
                </div>                
                <div className={styles.supportBox}>
                  Suporte ilimitado e gratuito via telefone, e-mail, chat e ticket
                </div>
          </div>


          <div className={styles.pricingCard2}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Scale</h2>
              <span className={styles.mostChosen}>Mais escolhido</span>
            </div>
            <p className={styles.cardText}>Integre com marketplaces, e-commerce e logística</p>
            <p className={styles.cardPrice}>
              <span className={styles.currency}>R$</span>
              <span className={styles.amount}>99</span>
              <span className={styles.period}>/mês</span>
            </p>
            <TransparentButton title="Iniciar Agora" redirectTo="/signup" />
            <div className={styles.featuresBox2}>
              <h3 className={styles.featuresTitle}>Recursos ilimitados</h3>
              <ul className={styles.featuresList}>
                <li>Sincronização de estoque</li>
                <li>Integrações com +250 e-commerces, marketplaces e operadores logísticos</li>
                <li>Atualização automática de pedidos de venda</li>
              </ul>
            </div>
            <div className={styles.resourceList}>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/users.svg" alt="Users" width={20} height={20} />
                    <span>5 Funcionários</span>
                  </div>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/file.svg" alt="File" width={20} height={20} />
                    <span>60 MB de dados</span>
                  </div>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/data.svg" alt="Data" width={20} height={20} />
                    <span>1,5 GB de arquivos</span>
                  </div>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/mark.svg" alt="Mark" width={20} height={20} />
                    <span>200 importações de pedidos em marketplaces por mês</span>
                  </div>
                </div>
                <div className={styles.plansBox}>
                  <h3 className={styles.plansTitle}>No Plano Startup, você tem:</h3>
                  <ul className={styles.plansList}>
                    <li>Sincronização de estoque</li>
                    <li>Integrações com +250 e-commerces, marketplaces e operadores logísticos</li>
                    <li>Atualização automática de pedidos de venda</li>
                  </ul>
                </div>
                <div className={styles.supportBox}>
                  Suporte ilimitado e gratuito via telefone, e-mail, chat e ticket
                </div>
          </div>


          <div className={styles.pricingCard}>
            <h2 className={styles.cardTitle}>Ilimitado</h2>
            <p className={styles.cardText}>Integre com marketplaces, e-commerce e logística</p>
            <p className={styles.cardPrice}>
              <span className={styles.currency}>R$</span>
              <span className={styles.amount}>99</span>
              <span className={styles.period}>/mês</span>
            </p>
            <TransparentButton title="Iniciar Agora" redirectTo="/signup" />
            <div className={styles.featuresBox}>
              <h3 className={styles.featuresTitle}>Recursos ilimitados</h3>
              <ul className={styles.featuresList}>
                <li>Sincronização de estoque</li>
                <li>Integrações com +250 e-commerces, marketplaces e operadores logísticos</li>
                <li>Atualização automática de pedidos de venda</li>
              </ul>                            
            </div>
              <div className={styles.resourceList}>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/users.svg" alt="Users" width={20} height={20} />
                    <span>5 Funcionários</span>
                  </div>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/file.svg" alt="File" width={20} height={20} />
                    <span>60 MB de dados</span>
                  </div>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/data.svg" alt="Data" width={20} height={20} />
                    <span>1,5 GB de arquivos</span>
                  </div>
                  <div className={styles.resourceItem}>
                    <Image src="/icons/mark.svg" alt="Mark" width={20} height={20} />
                    <span>200 importações de pedidos em marketplaces por mês</span>
                  </div>
                </div>
                <div className={styles.plansBox}>
                  <h3 className={styles.plansTitle}>No Plano Startup, você tem:</h3>
                  <ul className={styles.plansList}>
                    <li>Sincronização de estoque</li>
                    <li>Integrações com +250 e-commerces, marketplaces e operadores logísticos</li>
                    <li>Atualização automática de pedidos de venda</li>
                  </ul>
                </div>
                <div className={styles.supportBox}>
                  Suporte ilimitado e gratuito via telefone, e-mail, chat e ticket
                </div>
          </div>        
        </section>

        
        <section className={styles.newSection}>
          <div className={styles.sectionOne}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Seed</h2>
              <p className={styles.cardText2}>Plano básico para novos negócios</p>
            </div>
            <div className={styles.priceButtonContainer}>
              <p className={styles.cardPrice}>
                <span className={styles.currency}>R$</span>
                <span className={styles.amount}>49</span>
                <span className={styles.period}>/mês</span>
              </p>
              <TransparentButton title="Iniciar Agora" redirectTo="/signup" />
            </div>
            <div className={styles.featuresBox}>
              <h3 className={styles.featuresTitle}>Recursos ilimitados</h3>
              <ul className={styles.featuresList}>
                <li>Sincronização de estoque</li>
                <li>Integrações com +250 e-commerces, marketplaces e operadores logísticos</li>
                <li>Atualização automática de pedidos de venda</li>
              </ul>
            </div>
          </div>

          <div className={styles.sectionTwo}>
            <div className={styles.resourceItem}>
              <Image src="/icons/users.svg" alt="Users" width={20} height={20} />
              <span>5 Funcionários</span>
            </div>
            <div className={styles.resourceItem}>
              <Image src="/icons/file.svg" alt="File" width={20} height={20} />
              <span>60 MB de dados</span>
            </div>
            <div className={styles.resourceItem}>
              <Image src="/icons/data.svg" alt="Data" width={20} height={20} />
              <span>1,5 GB de arquivos</span>
            </div>
            <div className={styles.resourceItem}>
              <Image src="/icons/mark.svg" alt="Mark" width={20} height={20} />
              <span>200 importações de pedidos em marketplaces por mês</span>
            </div>
            <div className={styles.plansBox}>
                  <h3 className={styles.plansTitle}>No Plano Startup, você tem:</h3>
                  <ul className={styles.plansList}>
                    <li>Sincronização de estoque</li>
                    <li>Integrações com +250 e-commerces, marketplaces e operadores logísticos</li>
                    <li>Atualização automática de pedidos de venda</li>
                  </ul>
                </div>
          </div>

          <div className={styles.sectionThree}>
            <div className={styles.supportBox}>
              Suporte ilimitado e gratuito via telefone, e-mail, chat e ticket
            </div>
            <div className={styles.idealBox}>
              Ideal para pessoas físicas e MEI que não emitem nota fiscal
            </div>
          </div>
        </section>
    </>
  );
};

export default Plans;