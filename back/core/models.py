from django.db import models


class Software(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255, default='', unique=True)
    descricao = models.TextField()
    dispositivos = models.CharField(max_length=255)
    imagem_url = models.URLField(max_length=200, blank=True, null=True)
    faq = models.JSONField(default=list)
    relacionados = models.ManyToManyField('self', blank=True, related_name="relacionado a")

    def __str__(self):
        return self.nome


class Faq(models.Model):
    id = models.AutoField(primary_key=True)
    pergunta = models.TextField(default='')
    resposta = models.TextField(default='')

    def __str__(self):
        return self.pergunta
