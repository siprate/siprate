FROM python:3.11.3-alpine3.18
LABEL maintainer="sipratesystems@gmail.com"

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Defina o diretório de trabalho
WORKDIR /back

# Copie os arquivos de dependências
COPY requirements.txt /back/requirements.txt

# Copie o diretório scripts e dê permissão ao arquivo commands.sh
COPY scripts /back/scripts/
RUN chmod +x /back/scripts/commands.sh

# Verifique se o script foi copiado e as permissões estão corretas
RUN ls -l /back/scripts
RUN cat /back/scripts/commands.sh

# Copie o restante dos arquivos do projeto
COPY . .

# Instale as dependências
RUN python -m venv /venv && \
  /venv/bin/pip install --upgrade pip && \
  /venv/bin/pip install -r /back/requirements.txt && \
  adduser --disabled-password --no-create-home duser

# Defina o PATH
ENV PATH="/back/scripts:/venv/bin:$PATH"

# Mude o usuário para duser
USER duser

# Execute o script de comandos
CMD ["/back/scripts/commands.sh"]
